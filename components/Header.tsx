'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className="site">
        <div className="topbar">
          <div className="wrap">
            <span><span className="badge-mini">C-10 #1053285</span> · Licensed &amp; Insured</span>
            <div className="tb-right">
              <span>Serving Humboldt County since 2015</span>
              <span>Mon–Fri 7:30am–5:00pm</span>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="wrap">
            <a className="logo" href="#main" aria-label="Greenbelt Electrical home">
              <span className="mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#5CB63B" />
                </svg>
              </span>
              <span className="wordmark"><b>GREENBELT</b><small>ELECTRICAL</small></span>
            </a>
            <nav className="main" aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#area">Service Area</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="nav-actions">
              <a className="phone-head" href="tel:+17074763720">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span className="num"><small>Call now</small>(707) 476-3720</span>
              </a>
              <a className="btn btn-primary" href="#contact">Request an Estimate</a>
            </div>
            <button
              className="menu-btn"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div className="scrim" onClick={close} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button className="closer" onClick={close} aria-label="Close menu">&times;</button>
          <a className="dlink" href="#services" onClick={close}>Services</a>
          <a className="dlink" href="#about" onClick={close}>About</a>
          <a className="dlink" href="#why" onClick={close}>Why Us</a>
          <a className="dlink" href="#reviews" onClick={close}>Reviews</a>
          <a className="dlink" href="#area" onClick={close}>Service Area</a>
          <a className="dlink" href="#contact" onClick={close}>Contact</a>
          <a className="btn btn-primary" href="#contact" onClick={close} style={{ marginTop: 18 }}>
            Request an Estimate
          </a>
          <a className="btn btn-ghost" href="tel:+17074763720" style={{ marginTop: 10 }}>
            Call (707) 476-3720
          </a>
        </div>
      </div>
    </>
  );
}
