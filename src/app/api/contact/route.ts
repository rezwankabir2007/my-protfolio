import { NextResponse } from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(request: Request) {
  const body = await request.json();

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          'Email delivery is not configured yet. Set RESEND_API_KEY and RESEND_FROM_EMAIL in your environment variables to enable sending.',
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: ['your-email@example.com'],
        subject: `[Portfolio Contact] ${String(body.subject || 'New message')}`,
        html: `
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${String(body.name || '')}</p>
          <p><strong>Email:</strong> ${String(body.email || '')}</p>
          <p><strong>Subject:</strong> ${String(body.subject || '')}</p>
          <p><strong>Message:</strong> ${String(body.message || '')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          message: `Delivery failed: ${errorText || 'The email service rejected the request.'}`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        message: 'The email service is temporarily unavailable. Please try again later.',
      },
      { status: 500 },
    );
  }
}
