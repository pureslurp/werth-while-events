import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/content";
import { validateInquiry, type InquiryInput } from "@/lib/inquiry";

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "invalid",
        fields: { message: `That form could not be read. Email ${contactEmail}.` },
      },
      { status: 400 },
    );
  }

  const record = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const input: InquiryInput = {
    name: asString(record.name),
    email: asString(record.email),
    eventType: asString(record.eventType),
    date: asString(record.date),
    where: asString(record.where),
    message: asString(record.message),
    faxNumber: asString(record.fax_number),
  };

  if (input.faxNumber.trim()) {
    return NextResponse.json({ ok: true });
  }

  const fields = validateInquiry(input);
  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ error: "invalid", fields }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const date = input.date.trim() || "Not given";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Werth While inquiry from ${name}`,
        name,
        email,
        message: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Event: ${input.eventType}`,
          `Date: ${date}`,
          `Where: ${input.where}`,
          "",
          input.message.trim(),
        ].join("\n"),
      }),
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
    if (!response.ok || !result?.success) {
      return NextResponse.json({ error: "send" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
