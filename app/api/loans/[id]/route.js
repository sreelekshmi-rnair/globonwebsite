import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    const loan = await prisma.loan.findUnique({ where: { id } });
    if (!loan) {
      return NextResponse.json({ error: 'Loan not found' }, { status: 404 });
    }
    return NextResponse.json(loan);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch loan' }, { status: 500 });
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
    const {
      title,
      slug,
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

    const updated = await prisma.loan.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(category !== undefined && { category }),
        ...(interestRate !== undefined && { interestRate }),
        ...(maxAmount !== undefined && { maxAmount }),
        ...(tenure !== undefined && { tenure }),
        ...(processingFee !== undefined && { processingFee }),
        ...(shortDescription && { shortDescription }),
        ...(description && { description }),
        ...(eligibility !== undefined && { eligibility }),
        ...(documentsRequired !== undefined && { documentsRequired }),
        ...(benefits !== undefined && { benefits }),
        ...(icon !== undefined && { icon }),
        ...(image !== undefined && { image }),
        ...(isPopular !== undefined && { isPopular: Boolean(isPopular) }),
        ...(order !== undefined && { order: Number(order) }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update loan error:', error);
    return NextResponse.json({ error: 'Failed to update loan' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    await prisma.loan.delete({ where: { id } });
    return NextResponse.json({ success: true, message: 'Loan deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete loan' }, { status: 500 });
  }
}
