import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [servicesCount, loansCount, blogsCount, inquiriesCount] = await Promise.all([
      prisma.service.count(),
      prisma.loan.count(),
      prisma.blog.count(),
      prisma.inquiry.count(),
    ]);

    const recentInquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return NextResponse.json({
      counts: {
        services: servicesCount,
        loans: loansCount,
        blogs: blogsCount,
        inquiries: inquiriesCount,
        newInquiries: inquiriesCount,
      },
      recentInquiries,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
