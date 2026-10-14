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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedOnly = searchParams.get('all') !== 'true';

    const where = publishedOnly ? { published: true } : {};

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, author, excerpt, content, image, published, date } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json({ error: 'Title, excerpt, and content are required' }, { status: 400 });
    }

    const slug = body.slug ? slugify(body.slug) : slugify(title);
    const existing = await prisma.blog.findUnique({ where: { slug } });
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug: finalSlug,
        category: category || 'Business',
        author: author || 'Globon Team',
        excerpt,
        content,
        image: image || '/assets/images/blog/blog-01.jpg',
        date: date || '',
        published: published !== undefined ? Boolean(published) : true,
      },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}
