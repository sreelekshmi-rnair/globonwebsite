import { NextResponse } from 'next/server';
import { getAllServices, saveService, getAllCategories, syncDatabaseWithServices } from '@/lib/servicesStore';
import { getCurrentAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await syncDatabaseWithServices();
    const { searchParams } = new URL(request.url);
    const categoryFilter = searchParams.get('category');
    const services = getAllServices(categoryFilter);
    const categories = getAllCategories();

    return NextResponse.json({
      services,
      categories: categories.map((c) => ({
        id: c.id,
        slug: c.slug,
        title: c.title,
        serviceCount: (c.services || []).length,
      })),
      total: services.length,
    });
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
    const { title, category } = body;

    if (!title || !category) {
      return NextResponse.json(
        { error: 'Service title and category are required' },
        { status: 400 }
      );
    }

    const saved = await saveService(body);
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: error.message || 'Failed to create service' }, { status: 500 });
  }
}
