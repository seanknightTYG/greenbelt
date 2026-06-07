/**
 * POST /api/lead  — App Router route handler (Next.js 13.4+ / 14 / 15)
 *
 * Receives the LeadForm submission, validates it server-side, then forwards a
 * clean payload to your n8n webhook. The n8n URL lives in an env var and is
 * read ONLY on the server, so it is never shipped to the browser.
 *
 * Env vars (.env.local — do NOT commit):
 *   N8N_LEAD_WEBHOOK_URL=https://<your-n8n-host>/webhook/greenbelt-lead
 *   N8N_WEBHOOK_TOKEN=<optional shared secret you also check inside n8n>
 *
 * runtime = 'nodejs' so we can use server-only secrets safely.
 */

export const runtime = 'nodejs';

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;
  submittedAt?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 2000): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  // ---- Server-side validation (never trust the client) ----
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 2000);

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required.';
  if (!phone) errors.phone = 'Phone is required.';
  if (email && !EMAIL_RE.test(email)) errors.email = 'Email is invalid.';
  if (!service) errors.service = 'Service is required.';
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('N8N_LEAD_WEBHOOK_URL is not set');
    return Response.json({ ok: false, error: 'Server not configured.' }, { status: 500 });
  }

  // Split name into first/last for HCP mapping downstream in n8n.
  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(' ');

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Optional shared secret — verify this header in the n8n Webhook node.
        ...(process.env.N8N_WEBHOOK_TOKEN
          ? { 'X-Webhook-Token': process.env.N8N_WEBHOOK_TOKEN }
          : {}),
      },
      body: JSON.stringify({
        firstName,
        lastName,
        name,
        phone,
        email,
        service,
        message,
        source: clean(body.source, 80) || 'website',
        submittedAt: clean(body.submittedAt, 40) || new Date().toISOString(),
      }),
      // Don't let a slow webhook hang the request forever.
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error('n8n webhook responded', res.status, await res.text().catch(() => ''));
      return Response.json({ ok: false, error: 'Upstream error.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Failed to forward lead to n8n', err);
    return Response.json({ ok: false, error: 'Network error.' }, { status: 502 });
  }
}
