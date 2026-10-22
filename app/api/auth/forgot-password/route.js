import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { findAdminByEmail } from '@/lib/adminStore';
import { createResetToken } from '@/lib/tokenStore';
import { sendPasswordResetEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const rawEmail = (body.email || '').trim();

    if (!rawEmail) {
      return NextResponse.json({ error: 'Please enter your email address' }, { status: 400 });
    }

    const cleanEmail = rawEmail.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // 1. Look up admin in local store
    let admin = findAdminByEmail(cleanEmail);

    // 2. Look up in Prisma DB if available
    if (!admin) {
      try {
        const dbAdmin = await prisma.adminUser.findUnique({
          where: { username: cleanEmail },
        });
        if (dbAdmin) {
          admin = {
            id: dbAdmin.id,
            name: dbAdmin.name,
            email: dbAdmin.username,
          };
        }
      } catch (dbErr) {
        // Prisma skipped if not configured
      }
    }

    // Check if it's the default admin account
    if (!admin && (cleanEmail === 'admin@globon.com' || cleanEmail === 'admin')) {
      admin = {
        id: 1,
        name: 'Globon Administrator',
        email: cleanEmail.includes('@') ? cleanEmail : 'admin@globon.com',
      };
    }

    if (!admin) {
      return NextResponse.json(
        { error: 'No admin account found with this email address.' },
        { status: 404 }
      );
    }

    // Generate reset token
    const token = createResetToken(admin.email);

    // Determine host origin for link
    let origin = request.headers.get('origin');
    if (!origin) {
      const host = request.headers.get('host') || 'localhost:3000';
      const protocol = request.headers.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
      origin = `${protocol}://${host}`;
    }

    const resetUrl = `${origin}/admin/reset-password?token=${encodeURIComponent(token)}&email=${encodeURIComponent(admin.email)}`;

    // Send email
    const emailResult = await sendPasswordResetEmail({
      to: admin.email,
      resetUrl,
      adminName: admin.name || 'Admin',
    });

    if (!emailResult.success || !emailResult.emailSent) {
      return NextResponse.json(
        {
          error: emailResult.error || 'Email could not be delivered. Please check your SMTP settings in .env.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `A password reset link has been sent to ${admin.email}.`,
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ error: 'Failed to process password reset request' }, { status: 500 });
  }
}
