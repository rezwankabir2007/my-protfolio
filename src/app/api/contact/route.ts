import { NextResponse } from 'next/server';

import { contactSchema } from '@/lib/validations';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const resendToEmail = process.env.RESEND_TO_EMAIL;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Please submit a valid contact form.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Please check the form fields and try again.' }, { status: 400 });
  }

  if (!resendApiKey || !resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      {
        message: 'Email delivery is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and RESEND_TO_EMAIL to enable contact form delivery.',
      },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [resendToEmail],
        reply_to: email,
        subject: `[Portfolio Contact] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Email delivery failed. Please try again later or contact me by email.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'The email service is temporarily unavailable. Please try again later or contact me by email.' },
      { status: 500 },
    );
  }
}
