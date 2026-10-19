import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body.name || body.fullName || '').trim();
    const phoneNumber = (body.phoneNumber || body.phone || '').trim();
    const email = (body.email || body.emailAddress || '').trim();
    const subject = (body.subject || '').trim();
    const messageSnippet = (body.messageSnippet || body.message || '').trim();

    if (!name || !phoneNumber) {
      return NextResponse.json({ error: 'Name and Phone Number are required' }, { status: 400 });
    }

    const contact = await prisma.contactMessage.create({
      data: {
        name,
        phoneNumber,
        email,
        subject,
        messageSnippet,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! Our team will contact you shortly.',
      contactId: contact.id,
    }, { status: 201 });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}

export async function GET(request) {
  const admin = getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const contacts = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contact messages' }, { status: 500 });
  }
}
