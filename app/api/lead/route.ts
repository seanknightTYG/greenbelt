/**
 * POST /api/lead
 * Validates the LeadForm submission, then forwards to the n8n webhook.
 * The webhook URL lives in N8N_LEAD_WEBHOOK_URL (server-only, never shipped to browser).
 */

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

  const name    = clean(body.name, 120);
  const phone   = clean(body.phone, 40);
  const email   = clean(body.email, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 2000);

  const errors: Record<string, string> = {};
  if (!name)                              errors.name    = 'Name is required.';
  if (!phone)                             errors.phone   = 'Phone is required.';
  if (email && !EMAIL_RE.test(email))     errors.email   = 'Email is invalid.';
  if (!service)                           errors.service = 'Service is required.';
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('N8N_LEAD_WEBHOOK_URL is not set');
    return Response.json({ ok: false, error: 'Server not configured.' }, { status: 500 });
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(' ');

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
