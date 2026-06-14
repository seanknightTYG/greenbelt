import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Request Received — Greenbelt Electrical',
  description: 'Thanks for reaching out to Greenbelt Electrical. We will be in touch shortly.',
};

export default function ThankYou() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
        background: '#F7F7F5',
        fontFamily: 'var(--font-source-sans, sans-serif)',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <Link href="/" aria-label="Back to Greenbelt Electrical home" style={{ textDecoration: 'none', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg viewBox="0 0 24 24" fill="none" width={36} height={36} aria-hidden="true">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#5CB63B" />
        </svg>
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: 2, color: '#1A1A18' }}>
          GREENBELT <span style={{ fontWeight: 400 }}>ELECTRICAL</span>
        </span>
      </Link>

      {/* Card */}
      <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', padding: 'clamp(2rem, 6vw, 3.5rem)', maxWidth: 520, width: '100%' }}>

        {/* Check icon */}
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#EAF7E4', border: '2px solid #5CB63B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#3A8A20" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" width={36} height={36}>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 800, color: '#1A1A18', marginBottom: 12 }}>
          We got your request!
        </h1>
        <p style={{ fontSize: 18, color: '#5A5A52', marginBottom: 32, lineHeight: 1.6 }}>
          A Greenbelt electrician will follow up with you shortly — usually the same business day.
        </p>

        {/* Emergency callout */}
        <div style={{ background: '#FFF8E1', border: '1.5px solid #F2C829', borderRadius: 14, padding: '1.25rem 1.5rem', marginBottom: 32 }}>
          <p style={{ fontWeight: 700, fontSize: 15, color: '#1A1A18', marginBottom: 12 }}>
            ⚡ Need us sooner or have an emergency?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="tel:+17074763720"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#1A1A18', color: '#fff', fontWeight: 700, fontSize: 17, borderRadius: 10, padding: '0.75rem 1.25rem', textDecoration: 'none' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              Call (707) 476-3720
            </a>
            <a
              href="sms:+17074763720"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#5CB63B', color: '#fff', fontWeight: 700, fontSize: 17, borderRadius: 10, padding: '0.75rem 1.25rem', textDecoration: 'none' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text (707) 476-3720
            </a>
          </div>
        </div>

        <Link href="/" style={{ display: 'inline-block', color: '#3A8A20', fontWeight: 700, fontSize: 15, textDecoration: 'underline' }}>
          ← Back to homepage
        </Link>
      </div>

      <p style={{ marginTop: 32, fontSize: 13, color: '#9A9A92' }}>
        © {new Date().getFullYear()} Greenbelt Electrical LLC · CA C-10 #1053285
      </p>
    </main>
  );
}
