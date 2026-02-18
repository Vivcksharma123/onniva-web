import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // 🔴 REQUIRED

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Incoming form data:', body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 🔍 Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection OK');

    await transporter.sendMail({
      from: `"Contact Us" <${process.env.SMTP_USER}>`,
      to: 'vivek.sharma@f5buddy.com',
      replyTo: body.email,
      subject: `Contact Form: ${body.subject || 'New Inquiry'}`,
      text: `
Name: ${body.name}
Phone: ${body.phone || 'Not provided'}
Email: ${body.email}

Message:
${body.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('MAIL ERROR FULL:', error);
    return NextResponse.json(
      { error: 'Internal mail error' },
      { status: 500 }
    );
  }
}
