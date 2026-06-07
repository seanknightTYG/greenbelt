'use client';

import { useState } from 'react';

const SERVICES = [
  'Electrical panel upgrade',
  'EV charger installation',
  'Whole-home rewiring',
  'Lighting & outlets',
  'Troubleshooting & repair',
  'Generator / backup power',
  'Commercial / facility work',
  'Something else',
] as const;

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'service', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.name?.trim()) e.name = 'Please enter your name.';
    if (!data.phone?.trim()) e.phone = 'Please enter a phone number we can reach you at.';
    if (data.email?.trim() && !EMAIL_RE.test(data.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (!data.service) e.service = 'Please choose a service.';
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill hidden fields
    if ((fd.get('company') as string)?.trim()) return;

    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name.trim(),
          phone: data.phone.trim(),
          email: data.email?.trim() || '',
          service: data.service,
          message: data.message?.trim() || '',
          source: 'website-estimate-form',
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-white p-9 text-center shadow-xl"
      >
        <div className="mx-auto mb-4 grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-green bg-green/10">
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-forest" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-charcoal">Thanks — we got it!</h3>
        <p className="mt-2 text-lg text-conduit">
          A Greenbelt electrician will reach out shortly. Need us sooner? Call{' '}
          <a href="tel:+17074763720" className="font-bold text-forest underline">(707) 476-3720</a>.
        </p>
      </div>
    );
  }

  const fieldBase =
    'w-full rounded-xl border-2 bg-white px-4 py-3.5 text-lg text-charcoal min-h-[54px] ' +
    'transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25 font-sans';
  const ok = 'border-[#D2D2CB] hover:border-[#b9b9b1]';
  const bad = 'border-[#B42318]';

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-8 shadow-xl"
      aria-describedby={status === 'error' ? 'form-error' : undefined}
    >
      <h3 className="text-2xl font-extrabold text-charcoal">Tell us about your project</h3>
      <p className="mb-6 text-conduit">No obligation — just a clear, written estimate.</p>

      {/* Honeypot — visually hidden but accessible to crawlers */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" className={`${fieldBase} ${errors.name ? bad : ok}`} />}
        </Field>
        <Field id="phone" label="Phone" required error={errors.phone}>
          {(p) => <input {...p} type="tel" inputMode="tel" autoComplete="tel" className={`${fieldBase} ${errors.phone ? bad : ok}`} />}
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email}>
        {(p) => <input {...p} type="email" autoComplete="email" className={`${fieldBase} ${errors.email ? bad : ok}`} />}
      </Field>

      <Field id="service" label="What do you need?" required error={errors.service}>
        {(p) => (
          <select {...p} defaultValue="" className={`${fieldBase} ${errors.service ? bad : ok}`}>
            <option value="" disabled>Choose a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
      </Field>

      <Field id="message" label="Project details">
        {(p) => (
          <textarea
            {...p}
            rows={4}
            placeholder="Tell us a little about your home and what you're looking to do…"
            className={`${fieldBase} ${ok} min-h-[120px] resize-y`}
          />
        )}
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 flex min-h-[54px] w-full items-center justify-center rounded-xl bg-yellow px-7 text-lg font-bold text-charcoal shadow-[0_6px_18px_rgba(242,200,41,0.4)] transition hover:bg-[#ffd83a] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Request My Estimate'}
      </button>

      {status === 'error' && (
        <p id="form-error" role="alert" className="mt-3 text-center font-semibold text-[#B42318]">
          Something went wrong. Please call us at{' '}
          <a href="tel:+17074763720" className="underline">(707) 476-3720</a> or try again.
        </p>
      )}

      <p className="mt-3 text-center text-sm text-conduit">
        We&apos;ll never share your information. Reply usually within one business day.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: (props: {
    id: string;
    name: string;
    'aria-required'?: true;
    'aria-invalid'?: true;
    'aria-describedby'?: string;
  }) => React.ReactNode;
}) {
  const errId = `${id}-error`;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-base font-bold text-charcoal">
        {label}{required && <span className="text-[#B42318] ml-1" aria-hidden="true">*</span>}
      </label>
      {children({
        id,
        name: id,
        'aria-required': required ? true : undefined,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errId : undefined,
      })}
      {error && (
        <p id={errId} role="alert" className="mt-1.5 text-sm font-semibold text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
}
