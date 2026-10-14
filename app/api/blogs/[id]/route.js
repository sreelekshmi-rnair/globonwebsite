import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
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
    const { title, slug, category, author, excerpt, content, image, published, date } = body;

    const updated = await prisma.blog.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(category !== undefined && { category }),
        ...(author !== undefined && { author }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        ...(image !== undefined && { image }),
        ...(date !== undefined && { date }),
        ...(published !== undefined && { published: Boolean(published) }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
