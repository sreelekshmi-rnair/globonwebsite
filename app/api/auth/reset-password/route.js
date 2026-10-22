import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { verifyResetToken, markTokenUsed } from '@/lib/tokenStore';
import { updateAdminPassword, findAdminByEmail } from '@/lib/adminStore';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ valid: false, error: 'Reset token is missing' }, { status: 400 });
    }

    const verification = verifyResetToken(token);
    if (!verification.valid) {
      return NextResponse.json({ valid: false, error: verification.error }, { status: 400 });
    }

    return NextResponse.json({ valid: true, email: verification.email });
  } catch (error) {
    console.error('Reset token verification error:', error);
    return NextResponse.json({ valid: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { token, password, confirmPassword } = body;

    if (!token) {
      return NextResponse.json({ error: 'Reset token is required' }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    // Verify token
    const verification = verifyResetToken(token);
    if (!verification.valid) {
      return NextResponse.json({ error: verification.error }, { status: 400 });
    }

    const email = verification.email;
    const passwordHash = await bcrypt.hash(password, 10);

    // 1. Update in MySQL Database
    let updated = false;
    try {
      await prisma.adminUser.update({
        where: { username: email },
        data: { password: passwordHash },
      });
      updated = true;
    } catch (dbErr) {
      console.warn('DB update note:', dbErr?.message);
    }

    // 2. Also sync local store
    const localUpdated = updateAdminPassword(email, passwordHash);
    if (localUpdated) updated = true;

    if (!updated) {
      return NextResponse.json({ error: 'Admin account not found in database' }, { status: 404 });
    }

    // Invalidate token
    markTokenUsed(token);

    return NextResponse.json({
      success: true,
      message: 'Your password has been successfully reset. You can now sign in with your new password.',
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
  }
}
