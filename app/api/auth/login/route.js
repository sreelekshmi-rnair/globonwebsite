import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signToken, isAuthConfigured } from '@/lib/auth';
import { findAdminByEmail } from '@/lib/adminStore';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || body.username || '').trim();
    const password = body.password;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const cleanLower = email.toLowerCase();
    let admin = null;
    try {
      admin = await prisma.adminUser.findUnique({
        where: { username: cleanLower },
      });
    } catch (dbErr) {
      console.warn('DB lookup skipped:', dbErr.message);
    }

    // Check local admin store
    if (!admin) {
      const stored = findAdminByEmail(cleanLower);
      if (stored) {
        admin = {
          id: stored.id,
          name: stored.name,
          username: stored.email || stored.username,
          password: stored.password,
        };
      }
    }

    let isValid = false;
    let adminData = null;

    if (admin && admin.password) {
      isValid = await bcrypt.compare(password, admin.password);
      if (isValid) {
        adminData = {
          id: admin.id,
          email: admin.username,
          username: admin.username,
          name: admin.name,
        };
      }
    }

    // No built-in default login: only real accounts with a hashed password can sign in.
    if (!isValid || !adminData) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    if (!isAuthConfigured()) {
      console.error('Admin login refused: ADMIN_JWT_SECRET is not set in this environment.');
      return NextResponse.json({ error: 'Admin login is not configured on this server. Please contact the site administrator.' }, { status: 503 });
    }

    const token = signToken(adminData);

    const response = NextResponse.json({
      success: true,
      user: adminData,
    });

    // Set secure HTTP-only cookie
    response.cookies.set('globon_admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
