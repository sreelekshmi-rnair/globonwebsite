import nodemailer from 'nodemailer';

/**
 * Creates nodemailer transport using environment variables if available.
 */
function getTransporter() {
  const host = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_SERVER_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  return null;
}

/**
 * Sends a password reset email to the admin.
 * If SMTP credentials are not configured, it logs the reset link to the console for testing.
 */
export async function sendPasswordResetEmail({ to, resetUrl, adminName = 'Admin' }) {
  const from = process.env.EMAIL_FROM || '"Globon Business Solutions" <noreply@globon.in>';
  const transporter = getTransporter();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Globon Admin Password</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .wrapper { width: 100%; max-width: 580px; margin: 30px auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04); }
        .header { background: #005b94; padding: 24px 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 32px 30px; color: #334155; line-height: 1.6; font-size: 15px; }
        .content h2 { color: #0f172a; font-size: 18px; margin-top: 0; margin-bottom: 16px; font-weight: 600; }
        .btn-container { text-align: center; margin: 28px 0; }
        .btn { background-color: #005b94; color: #ffffff !important; padding: 13px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-block; box-shadow: 0 4px 10px rgba(0,91,148,0.2); }
        .link-box { background: #f1f5f9; border-radius: 8px; padding: 12px 14px; font-size: 12px; word-break: break-all; color: #64748b; margin-top: 20px; }
        .warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #92400e; margin-top: 24px; }
        .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 30px; text-align: center; font-size: 12px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>GLOBON BUSINESS SOLUTIONS</h1>
        </div>
        <div class="content">
          <h2>Password Reset Request</h2>
          <p>Hello ${adminName},</p>
          <p>We received a request to reset your password for the Globon Admin Portal. Click the button below to choose a new password:</p>
          
          <div class="btn-container">
            <a href="${resetUrl}" target="_blank" class="btn">Reset Password</a>
          </div>

          <p style="font-size: 13.5px; color: #64748b;">
            This password reset link is valid for <strong>60 minutes</strong> and can only be used once.
          </p>

          <div class="warning">
            <strong>Security Notice:</strong> If you did not request this password reset, please ignore this email. Your password will remain unchanged and your account is secure.
          </div>

          <div class="link-box">
            If the button doesn't work, copy and paste this link into your browser:<br />
            <a href="${resetUrl}" style="color: #005b94;">${resetUrl}</a>
          </div>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Globon Business Solutions. All rights reserved.<br />
          This is an automated system message. Please do not reply directly to this email.
        </div>
      </div>
    </body>
    </html>
  `;

  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from,
        to,
        subject: 'Reset Your Globon Admin Password',
        text: `Hello ${adminName},\n\nYou requested to reset your Globon Admin password.\n\nPlease visit the following link to reset your password:\n${resetUrl}\n\nThis link will expire in 60 minutes.\n\nIf you did not request this, please ignore this email.`,
        html: htmlContent,
      });

      console.log('Password reset email sent successfully to:', to, 'MessageId:', info.messageId);
      return { success: true, emailSent: true, messageId: info.messageId };
    } catch (err) {
      console.error('Failed to send email via SMTP:', err);
      return {
        success: false,
        emailSent: false,
        error: `SMTP error: ${err.message}. Please check your SMTP credentials in .env.`,
        previewUrl: resetUrl,
      };
    }
  } else {
    console.log('====================================================');
    console.log('[PASSWORD RESET - SMTP NOT CONFIGURED IN .env]');
    console.log('To:', to);
    console.log('Reset Link:', resetUrl);
    console.log('Configure SMTP_USER and SMTP_PASS in .env to send real emails.');
    console.log('====================================================');

    return {
      success: false,
      emailSent: false,
      error: 'Email service is not yet configured. Please set SMTP_USER and SMTP_PASS in .env to send actual emails to your inbox.',
      previewUrl: resetUrl,
    };
  }
}
