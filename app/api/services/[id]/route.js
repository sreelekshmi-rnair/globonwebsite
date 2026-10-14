import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const { title, slug, category, icon, shortDescription, description, features, image, isFeatured, order } = body;

    const updated = await prisma.service.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(category !== undefined && { category }),
        ...(icon !== undefined && { icon }),
        ...(shortDescription && { shortDescription }),
        ...(description && { description }),
        ...(features !== undefined && { features }),
        ...(image !== undefined && { image }),
        ...(isFeatured !== undefined && { isFeatured: Boolean(isFeatured) }),
        ...(order !== undefined && { order: Number(order) }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update service error:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    await prisma.service.delete({ where: { id } });
    return NextResponse.json({ success: true, message: 'Service deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
