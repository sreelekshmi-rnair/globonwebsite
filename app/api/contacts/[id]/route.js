import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const contact = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!contact) {
      return NextResponse.json({ error: 'Contact message not found' }, { status: 404 });
    }

    return NextResponse.json({ contact });
  } catch (error) {
    console.error('Error fetching contact message:', error);
    return NextResponse.json({ error: 'Failed to fetch contact message' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const body = await request.json();

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: {
        ...(body.status ? { status: body.status } : {}),
      },
    });

    return NextResponse.json({ success: true, contact: updated });
  } catch (error) {
    console.error('Error updating contact message:', error);
    return NextResponse.json({ error: 'Failed to update contact message' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting contact message:', error);
    return NextResponse.json({ error: 'Failed to delete contact message' }, { status: 500 });
  }
}
