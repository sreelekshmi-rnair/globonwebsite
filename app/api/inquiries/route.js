import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const fullName = (body.fullName || body.name || '').trim();
    const email = (body.email || '').trim();
    const phoneNumber = (body.phoneNumber || body.phone || '').trim();
    const businessName = (body.businessName || '').trim();
    const industry = (body.industry || '').trim();
    const businessAge = (body.businessAge || '').trim();
    const monthlyRevenue = (body.monthlyRevenue || '').trim();
    const serviceNeeded = (body.serviceNeeded || body.service || body.subject || '').trim();
    const type = body.type || 'Consultation Request';
    const loanAmount = body.loanAmount || '';
    const message = body.message || '';

    if (!fullName || !phoneNumber) {
      return NextResponse.json({ error: 'Full Name and Phone Number are required' }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName,
        email,
        phoneNumber,
        businessName,
        industry,
        businessAge,
        monthlyRevenue,
        serviceNeeded,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully! Our team will contact you shortly.',
      inquiryId: inquiry.id,
    }, { status: 201 });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}

export async function GET(request) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Fetch inquiries error:', error);
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}
