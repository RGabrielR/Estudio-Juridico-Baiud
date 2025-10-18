import { NextResponse, type NextRequest } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

type VisitPayload = {
  total: number;
  lastNotifiedCount: number;
  history: Array<{
    timestamp: string;
    ip?: string;
    userAgent?: string;
  }>;
};

const DATA_DIRECTORY = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIRECTORY, "visit-tracking.json");

const DEFAULT_DATA: VisitPayload = {
  total: 0,
  lastNotifiedCount: 0,
  history: [],
};

async function ensureDataFile(): Promise<VisitPayload> {
  try {
    const file = await readFile(DATA_FILE, "utf8");
    return JSON.parse(file) as VisitPayload;
  } catch {
    await mkdir(DATA_DIRECTORY, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(DEFAULT_DATA, null, 2), "utf8");
    return DEFAULT_DATA;
  }
}

async function persistData(data: VisitPayload) {
  await mkdir(DATA_DIRECTORY, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

async function sendNotificationEmail(total: number) {
  const notifyEmail =
    process.env.VISIT_NOTIFY_EMAIL ?? "baiudlidiacristina@gmail.com";
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const from = process.env.VISIT_NOTIFY_FROM ?? notifyEmail;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn(
      "[visits] Faltan variables de entorno SMTP. No se envió la notificación.",
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from,
    to: notifyEmail,
    subject: `Nuevo registro de visitas: ${total}`,
    html: `<p>Hola,</p>
      <p>El sitio del Estudio Jurídico Lidia Cristina Baiud alcanzó <strong>${total.toLocaleString(
        "es-AR",
      )}</strong> visitas registradas.</p>
      <p>Recibirás un nuevo aviso al alcanzarse el siguiente intervalo configurado.</p>
      <p>— Contador automático</p>`,
  });
}

async function updateData(
  data: VisitPayload,
  request: NextRequest,
): Promise<VisitPayload> {
  const interval =
    Number.parseInt(process.env.VISIT_NOTIFY_INTERVAL ?? "25", 10) || 25;

  data.total += 1;

  const historyEntry = {
    timestamp: new Date().toISOString(),
    ip:
      request.headers.get("x-forwarded-for") ??
      request.headers.get("x-real-ip") ??
      undefined,
    userAgent: request.headers.get("user-agent") ?? undefined,
  };

  data.history = [historyEntry, ...data.history].slice(0, 50);

  if (
    interval > 0 &&
    data.total % interval === 0 &&
    data.total !== data.lastNotifiedCount
  ) {
    await sendNotificationEmail(data.total);
    data.lastNotifiedCount = data.total;
  }

  await persistData(data);
  return data;
}

export async function POST(request: NextRequest) {
  const data = await ensureDataFile();
  const updated = await updateData(data, request);
  return NextResponse.json({ total: updated.total });
}

export async function GET() {
  const data = await ensureDataFile();
  return NextResponse.json({ total: data.total });
}
