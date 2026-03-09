import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; 

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

     transporter.sendMail({
      from: `"Contact Us" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: body.email,
      subject: `Contact Form: ${body.subject || 'New Inquiry'}`,
      text: `
Name: ${body.name}
Phone: ${body.phone || 'Not provided'}
Email: ${body.email}

Message:
${body.message}
  `,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Subject:</strong> ${body.subject || 'New Inquiry'}</p>
    <p><strong>Message:</strong></p>
    <p>${body.message}</p>
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
