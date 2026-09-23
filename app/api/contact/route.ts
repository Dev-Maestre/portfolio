import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Your message was not sent." },
      { status: 400 },
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Enter your name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid email.";
  if (!message) errors.message = "Enter a message.";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Your message was not sent." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Your message was not sent." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
