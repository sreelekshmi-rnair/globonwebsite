import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getCurrentAdmin } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { findAdminByEmail, updateAdminPassword } from '@/lib/adminStore';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const admin = getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const email = (admin.email || admin.username || '').toLowerCase();
    const body = await request.json();
    const { currentPassword, newPassword, confirmPassword } = body;

    if (!currentPassword) {
      return NextResponse.json({ error: 'Current password is required' }, { status: 400 });
    }

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ error: 'New password must be at least 6 characters long' }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json({ error: 'New passwords do not match' }, { status: 400 });
    }

    // 1. Look up existing admin record to verify current password
    let currentHash = null;

    try {
      const dbAdmin = await prisma.adminUser.findUnique({
        where: { username: email },
      });
      if (dbAdmin && dbAdmin.password) {
        currentHash = dbAdmin.password;
      }
    } catch (e) {
      // Prisma offline or skipped
    }

    if (!currentHash) {
      const stored = findAdminByEmail(email);
      if (stored && stored.password) {
        currentHash = stored.password;
      }
    }

    if (!currentHash) {
      return NextResponse.json({ error: 'Admin account record not found' }, { status: 404 });
    }

    const isValid = await bcrypt.compare(currentPassword, currentHash);
    if (!isValid) {
      return NextResponse.json({ error: 'The current password you entered is incorrect' }, { status: 400 });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    // 2. Update in MySQL Database
    try {
      await prisma.adminUser.update({
        where: { username: email },
        data: { password: newHashedPassword },
      });
    } catch (e) {
      console.warn('Prisma password update skipped:', e?.message);
    }

    // 3. Update in Local Admin Store
    updateAdminPassword(email, newHashedPassword);

    return NextResponse.json({
      success: true,
      message: 'Password has been updated successfully',
    });
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json({ error: 'Failed to change password' }, { status: 500 });
  }
}
