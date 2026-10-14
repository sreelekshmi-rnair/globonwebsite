import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, icon, shortDescription, description, features, image, isFeatured, order } = body;

    if (!title || !shortDescription || !description) {
      return NextResponse.json({ error: 'Title, short description, and description are required' }, { status: 400 });
    }

    const slug = body.slug ? slugify(body.slug) : slugify(title);

    // Ensure slug uniqueness
    const existing = await prisma.service.findUnique({ where: { slug } });
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

    const newService = await prisma.service.create({
      data: {
        title,
        slug: finalSlug,
        category: category || 'General',
        icon: icon || 'flaticon-business',
        shortDescription,
        description,
        features: features || '',
        image: image || '/assets/images/service/service-01.jpg',
        isFeatured: Boolean(isFeatured),
        order: Number(order) || 0,
      },
    });

    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
