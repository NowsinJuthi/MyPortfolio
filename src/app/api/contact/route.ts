
import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request." },
      { status: 400 }
    );
  }

  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Please check your name, email, and message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, message } = result.data;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact email delivery request failed.");
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Your message has been submitted successfully." },
      { status: 200 }
    );
  } catch {
    console.error("Contact service request failed.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
