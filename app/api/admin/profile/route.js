import { NextResponse } from 'next/server';
import { getCurrentAdmin, signToken } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { findAdminByEmail, updateAdminProfile } from '@/lib/adminStore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const admin = getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const email = (admin.email || admin.username || '').toLowerCase();
    const stored = findAdminByEmail(email);

    let dbAdmin = null;
    try {
      const rows = await prisma.$queryRawUnsafe(
        'SELECT name, username, phone, address, avatar FROM AdminUser WHERE username = ? LIMIT 1',
        email
      );
      if (rows && rows.length > 0) {
        dbAdmin = rows[0];
      }
    } catch (e) {
      console.warn('DB profile query note:', e?.message);
    }

    const profile = {
      name: (dbAdmin && dbAdmin.name) || (stored && stored.name) || admin.name || 'Admin',
      email: email,
      phone: (dbAdmin && dbAdmin.phone) || (stored && stored.phone) || '',
      address: (dbAdmin && dbAdmin.address) || (stored && stored.address) || '',
      avatar: (dbAdmin && dbAdmin.avatar) || (stored && stored.avatar) || '',
    };

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error('Fetch profile error:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const admin = getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const email = (admin.email || admin.username || '').toLowerCase();
    const body = await request.json();
    const { name, phone, address, avatar } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
    }

    // 1. Update directly in MySQL Database
    try {
      await prisma.$executeRawUnsafe(
        'UPDATE AdminUser SET name = ?, phone = ?, address = ?, avatar = ? WHERE username = ?',
        name.trim(),
        phone ? phone.trim() : '',
        address ? address.trim() : '',
        avatar || '',
        email
      );
    } catch (e) {
      console.warn('MySQL profile update note:', e?.message);
    }

    // 2. Also keep local store in sync as backup
    const updated = updateAdminProfile(email, {
      name: name.trim(),
      phone: phone ? phone.trim() : '',
      address: address ? address.trim() : '',
      avatar: avatar || '',
    });

    const updatedProfile = {
      name: name.trim(),
      email: email,
      phone: phone ? phone.trim() : (updated && updated.phone) || '',
      address: address ? address.trim() : (updated && updated.address) || '',
      avatar: avatar || (updated && updated.avatar) || '',
    };

    const response = NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      profile: updatedProfile,
    });

    // Refresh auth cookie with updated name
    const newToken = signToken({
      ...admin,
      name: name.trim(),
    });

    response.cookies.set('globon_admin_token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
