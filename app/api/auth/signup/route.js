import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/auth';
import { findAdminByEmail, saveAdmin } from '@/lib/adminStore';

export async function POST(request) {
  try {
    const { name, email, password, confirmPassword } = await request.json();

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
    }

    const cleanEmail = (email || '').trim().toLowerCase();
    if (!cleanEmail) {
      return NextResponse.json({ error: 'Email address is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    // 1. Check if email already exists in database
    try {
      const dbExisting = await prisma.adminUser.findUnique({
        where: { username: cleanEmail },
      });
      if (dbExisting) {
        return NextResponse.json({ error: 'An account with this email already exists' }, { status: 400 });
      }
    } catch (e) {
      // Check local store if DB was unreachable
      const fileExisting = findAdminByEmail(cleanEmail);
      if (fileExisting) {
        return NextResponse.json({ error: 'An account with this email already exists' }, { status: 400 });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Create admin user in MySQL database
    let createdUser = null;
    try {
      createdUser = await prisma.adminUser.create({
        data: {
          name: name.trim(),
          username: cleanEmail,
          password: hashedPassword,
        },
      });
    } catch (dbErr) {
      console.error('MySQL AdminUser creation error:', dbErr?.message);
    }

    // 3. Keep local JSON store in sync as backup
    if (!createdUser || !createdUser.id) {
      createdUser = saveAdmin({
        name: name.trim(),
        email: cleanEmail,
        passwordHash: hashedPassword,
      });
    } else {
      saveAdmin({
        name: name.trim(),
        email: cleanEmail,
        passwordHash: hashedPassword,
      });
    }

    const adminData = {
      id: createdUser.id,
      email: cleanEmail,
      username: cleanEmail,
      name: createdUser.name,
    };

    const token = signToken(adminData);

    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: adminData,
    });

    // Auto login: Set secure HTTP-only cookie
    response.cookies.set('globon_admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
