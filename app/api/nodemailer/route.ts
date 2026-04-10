import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").slice(0, 1000);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const message = sanitize(body.message);

  if (!email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing fields" },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Сайт SETAGRO" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Нова заявка з сайту SETAGRO — ${name || email}`,
    html: `
      <h2 style="color:#55a630">Нове повідомлення з сайту SETAGRO</h2>
      <p><b>Імʼя:</b> ${name || "—"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Телефон:</b> ${phone || "—"}</p>
      <hr/>
      <p><b>Повідомлення:</b></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[nodemailer]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
