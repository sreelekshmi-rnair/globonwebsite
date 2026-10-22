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
      dbAdmin = await prisma.adminUser.findUnique({
        where: { username: email },
      });
    } catch (e) {
      // Prisma offline or skipped
    }

    const profile = {
      name: (dbAdmin && dbAdmin.name) || (stored && stored.name) || admin.name || 'Admin',
      email: email,
      phone: (stored && stored.phone) || '',
      address: (stored && stored.address) || '',
      avatar: (stored && stored.avatar) || '',
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

    // 1. Update in MySQL Database if available
    try {
      await prisma.adminUser.update({
        where: { username: email },
        data: { name: name.trim() },
      });
    } catch (e) {
      console.warn('Prisma profile name update skipped:', e?.message);
    }

    // 2. Update in Admin Store
    const updated = updateAdminProfile(email, {
      name: name.trim(),
      phone: phone ? phone.trim() : '',
      address: address ? address.trim() : '',
      avatar: avatar || '',
    });

    const updatedProfile = {
      name: name.trim(),
      email: email,
      phone: (updated && updated.phone) || phone || '',
      address: (updated && updated.address) || address || '',
      avatar: (updated && updated.avatar) || avatar || '',
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
