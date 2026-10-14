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
    const loans = await prisma.loan.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    return NextResponse.json(loans);
  } catch (error) {
    console.error('Error fetching loans:', error);
    return NextResponse.json({ error: 'Failed to fetch loans' }, { status: 500 });
  }
}

export async function POST(request) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      title,
      category,
      interestRate,
      maxAmount,
      tenure,
      processingFee,
      shortDescription,
      description,
      eligibility,
      documentsRequired,
      benefits,
      icon,
      image,
      isPopular,
      order,
    } = body;

    if (!title || !shortDescription || !description) {
      return NextResponse.json({ error: 'Title, short description, and description are required' }, { status: 400 });
    }

    const slug = body.slug ? slugify(body.slug) : slugify(title);
    const existing = await prisma.loan.findUnique({ where: { slug } });
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

    const newLoan = await prisma.loan.create({
      data: {
        title,
        slug: finalSlug,
        category: category || 'General Loan',
        interestRate: interestRate || '8.5% p.a.',
        maxAmount: maxAmount || 'Up to ₹50 Lakhs',
        tenure: tenure || '1 to 5 Years',
        processingFee: processingFee || '0.5%',
        shortDescription,
        description,
        eligibility: eligibility || '',
        documentsRequired: documentsRequired || '',
        benefits: benefits || '',
        icon: icon || 'flaticon-loan',
        image: image || '/assets/images/service/service-01.jpg',
        isPopular: Boolean(isPopular),
        order: Number(order) || 0,
      },
    });

    return NextResponse.json(newLoan, { status: 201 });
  } catch (error) {
    console.error('Error creating loan:', error);
    return NextResponse.json({ error: 'Failed to create loan' }, { status: 500 });
  }
}
