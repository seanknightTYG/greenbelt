import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />

      <main id="main">

        {/* ==================== HERO ==================== */}
        <section className="hero dark">
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">Licensed C-10 Electrical Contractor</span>
              <h1>Licensed electricians Humboldt County <span className="hl">trusts since 2015.</span></h1>
              <p className="lede">Panel upgrades, EV chargers, and whole-home rewiring — done to code by a local, certified crew that shows up when we say we will.</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">Request an Estimate</a>
                <a className="btn btn-ghost" href="#services">Our Services</a>
              </div>
              <div className="hero-trust">
                <span className="chip lic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  C-10 Licensed #1053285
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                  Insured &amp; bonded
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Local, family-run
                </span>
              </div>
            </div>
            <div className="hero-media">
              <div className="ph">
                <span className="ph-label ph-note">[ HERO PHOTO ]<br />electrician at residential panel</span>
              </div>
              <div className="float-card">
                <div>
                  <div className="stars">★★★★★</div>
                  <b>4.9</b>
                </div>
                <small>from 130+ verified<br />Google reviews</small>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TRUST STRIP ==================== */}
        <section className="truststrip" aria-label="Company highlights">
          <div className="wrap">
            <div className="ti"><b>10<span className="u">+</span></b><span>Years serving Humboldt</span></div>
            <div className="ti"><b>2,400<span className="u">+</span></b><span>Local jobs completed</span></div>
            <div className="ti"><b>4.9<span className="u">★</span></b><span>Average Google rating</span></div>
            <div className="ti"><b>100<span className="u">%</span></b><span>Licensed &amp; insured</span></div>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section className="band" id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What we do</span>
              <h2>Residential &amp; commercial electrical, done right</h2>
              <p>From a single outlet to a full service upgrade, every job is permitted, inspected, and left clean — with straight answers and upfront pricing.</p>
            </div>
            <div className="svc-grid">
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h6M9 10h6M9 14h6M9 18h2"/>
                  </svg>
                </div>
                <h3>Electrical panel upgrades</h3>
                <p>Replace overloaded or outdated panels with a safe, code-compliant 200-amp service ready for modern electrical loads.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="9" width="9" height="12" rx="1.5"/><path d="M6 9V5a3 3 0 0 1 6 0v4M18 11v3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4l-3-3"/>
                  </svg>
                </div>
                <h3>EV charger installation</h3>
                <p>Level 2 home charging installed correctly the first time — dedicated circuit, proper load calc, and a tidy finish.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7c4 0 4 10 8 10s4-10 8-10"/><circle cx="4" cy="7" r="2"/><circle cx="20" cy="17" r="2"/>
                  </svg>
                </div>
                <h3>Whole-home rewiring</h3>
                <p>Replace old knob-and-tube or aluminum wiring with safe copper — improving safety, capacity, and home value.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6M10 21h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z"/>
                  </svg>
                </div>
                <h3>Lighting &amp; outlets</h3>
                <p>Recessed lighting, added circuits, GFCI outlets, switches, and dimmers — installed cleanly and to code.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>
                  </svg>
                </div>
                <h3>Troubleshooting &amp; repair</h3>
                <p>Tripping breakers, dead outlets, flickering lights — we diagnose the real cause and fix it safely, fast.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
              <article className="svc">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="11" rx="2"/><path d="M7 8V6a5 5 0 0 1 10 0v2M12 12v3"/>
                  </svg>
                </div>
                <h3>Generators &amp; backup</h3>
                <p>Whole-home and battery backup installs so the lights, fridge, and well pump stay on through any outage.</p>
                <a className="more" href="#contact">Get an estimate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </article>
            </div>
            <div className="svc-commercial">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
                </svg>
              </div>
              <div>
                <h3>Commercial &amp; facility work</h3>
                <p>Tenant improvements, lighting retrofits, panel and service work, and ongoing maintenance for property managers, offices, and storefronts across Humboldt County. One licensed crew, scheduled around your business hours.</p>
              </div>
              <a className="btn btn-primary" href="#contact">Talk to us</a>
            </div>
          </div>
        </section>

        {/* ==================== WHY US ==================== */}
        <section className="band" id="why" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="split">
              <div className="why-media">
                <div className="ph"><span className="ph-label ph-note">[ TEAM PHOTO ]<br />crew + truck on the job</span></div>
              </div>
              <div className="why-copy">
                <span className="eyebrow">Why Greenbelt</span>
                <h2 style={{ fontSize: 'clamp(30px,3.6vw,42px)', marginTop: 14 }}>A licensed local you can actually reach</h2>
                <p style={{ fontSize: 20, color: 'var(--gray)', marginTop: 16 }}>We built Greenbelt to be the electrician our own families would call: certified, dependable, and honest about what your home really needs.</p>
                <div className="why-list">
                  <div className="why">
                    <div className="chk" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    <div><h3>Fully licensed C-10 &amp; insured</h3><p>California C-10 License #1053285. Every job is permitted and inspected — protecting your home and your warranty.</p></div>
                  </div>
                  <div className="why">
                    <div className="chk" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    <div><h3>Local since 2015</h3><p>Born and based in Humboldt County. We know the homes, the inspectors, and the coastal weather your system has to handle.</p></div>
                  </div>
                  <div className="why">
                    <div className="chk" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    <div><h3>Upfront, written pricing</h3><p>You get a clear quote before we start — no surprise add-ons, no pressure. The price we quote is the price you pay.</p></div>
                  </div>
                  <div className="why">
                    <div className="chk" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
                    <div><h3>On time, and we clean up</h3><p>We arrive in the window we promise, treat your home with respect, and leave the space cleaner than we found it.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section className="band about" id="about">
          <div className="wrap">
            <div className="split">
              <div className="about-copy">
                <span className="eyebrow">Our story</span>
                <h2 style={{ fontSize: 'clamp(30px,3.6vw,42px)', marginTop: 14 }}>Built on the North Coast, since 2015</h2>
                <p className="body">Greenbelt Electrical started with one truck, one licensed electrician, and a simple idea: Humboldt County deserved an electrical contractor that picked up the phone, showed up on time, and did the job by the book.</p>
                <p className="body">A decade later we&apos;re a trusted local team, but the standard hasn&apos;t changed. We&apos;re a licensed C-10 contractor — every panel upgrade, EV charger, and rewire is permitted, inspected, and backed by our workmanship. We live here too, so your home and our reputation are in the same community.</p>
                <p className="body">Whether it&apos;s a flickering light or a full service upgrade, you&apos;ll get the same thing every time: a straight answer, a fair price, and work we&apos;re proud to put our name on.</p>
                <div className="sig">
                  <div className="av" aria-hidden="true">GE</div>
                  <div><b>The Greenbelt Electrical team</b><small>Licensed C-10 #1053285 · Eureka, CA</small></div>
                </div>
              </div>
              <div className="about-media">
                <div className="ph"><span className="ph-label ph-note">[ OWNER / SHOP PHOTO ]<br />founder or branded truck</span></div>
                <div className="est-tag"><b>2015</b><small>Est.</small></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== REVIEWS ==================== */}
        <section className="band reviews" id="reviews">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Reviews</span>
              <h2>Humboldt homeowners recommend us</h2>
              <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>Real feedback from neighbors across the county.</p>
              <div style={{ marginTop: 22 }}>
                <span className="gbadge"><span className="stars">★★★★★</span> 4.9 / 5 on Google · 130+ reviews</span>
              </div>
            </div>
            <div className="rev-grid">
              <article className="rev">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;They upgraded our old panel to 200-amp and installed our EV charger in a single day. Showed up on time, explained everything, and left the garage spotless. Exactly what you want.&rdquo;</p>
                <div className="who"><div className="av">DM</div><div><b>Diane M.</b><small>Eureka · Panel upgrade</small></div></div>
              </article>
              <article className="rev">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;Honest and professional from the first call. The written quote matched the final bill to the dollar. As a property manager I now use Greenbelt for all our units.&rdquo;</p>
                <div className="who"><div className="av">RT</div><div><b>Robert T.</b><small>Arcata · Property manager</small></div></div>
              </article>
              <article className="rev">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;We had flickering lights and tripping breakers for months. Greenbelt found the real problem the same afternoon and fixed it safely. Kind, patient, and easy to understand.&rdquo;</p>
                <div className="who"><div className="av">CL</div><div><b>Carol L.</b><small>McKinleyville · Repair</small></div></div>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== SERVICE AREA ==================== */}
        <section className="band area" id="area">
          <div className="wrap">
            <div className="split">
              <div>
                <div className="sec-head" style={{ marginBottom: 0 }}>
                  <span className="eyebrow">Where we work</span>
                  <h2>Proudly serving Humboldt County</h2>
                  <p>If you&apos;re on the North Coast, you&apos;re in our service area. Not sure? Give us a call — we&apos;ll let you know right away.</p>
                </div>
                <div className="towns">
                  {['Eureka','Arcata','McKinleyville','Fortuna','Ferndale','Trinidad','Blue Lake','Loleta','Cutten'].map(town => (
                    <span key={town}><span className="d">●</span>{town}</span>
                  ))}
                </div>
                <a className="btn btn-primary" href="#contact" style={{ marginTop: 30 }}>Request an Estimate</a>
              </div>
              <div className="area-media">
                <div className="ph"><span className="ph-label ph-note">[ SERVICE-AREA MAP ]<br />Humboldt County coverage</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT / ESTIMATE ==================== */}
        <section className="band contact" id="contact">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Get started</span>
              <h2>Request your free estimate</h2>
              <p>Call us or send a few details and we&apos;ll get right back to you — usually the same business day.</p>
            </div>
            <div className="split">
              <div className="contact-info">
                <div className="ci-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
                    </svg>
                  </div>
                  <div><b>Call or text</b><a href="tel:+17074763720">(707) 476-3720</a></div>
                </div>
                <div className="ci-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>
                    </svg>
                  </div>
                  <div><b>Email</b><a href="mailto:office@greenbeltelectrical.com">office@greenbeltelectrical.com</a></div>
                </div>
                <div className="ci-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div><b>Address</b><span className="v">1815 B Street, Eureka, CA 95503</span></div>
                </div>
                <div className="ci-row">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                    </svg>
                  </div>
                  <div><b>Hours</b><span className="v">Mon–Fri 7:30am–5:00pm</span></div>
                </div>
                <div className="ci-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 11 2 2 4-4"/>
                  </svg>
                  <div><b>Licensed &amp; insured.</b> California C-10 License #1053285 · Serving Humboldt County since 2015.</div>
                </div>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        {/* ==================== CTA BAND ==================== */}
        <section className="ctaband" aria-label="Call to action">
          <div className="wrap">
            <div>
              <h2>Ready for an electrician you can trust?</h2>
              <p>Licensed, local, and on time — since 2015.</p>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href="#contact">Request an Estimate</a>
              <a className="btn btn-ghost" href="tel:+17074763720">Call (707) 476-3720</a>
            </div>
          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="site">
        <div className="wrap">
          <div className="cols">
            <div>
              <a className="logo" href="#main" aria-label="Greenbelt Electrical home">
                <span className="mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#5CB63B"/></svg>
                </span>
                <span className="wordmark"><b>GREENBELT</b><small>ELECTRICAL</small></span>
              </a>
              <div className="nap">
                Greenbelt Electrical LLC<br />
                1815 B Street, Eureka, CA 95503<br />
                <a href="tel:+17074763720">(707) 476-3720</a> · <a href="mailto:office@greenbeltelectrical.com">office@greenbeltelectrical.com</a>
              </div>
              <span className="lic-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                C-10 Licensed &amp; Insured · #1053285
              </span>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Panel upgrades</a></li>
                <li><a href="#services">EV chargers</a></li>
                <li><a href="#services">Whole-home rewiring</a></li>
                <li><a href="#services">Lighting &amp; outlets</a></li>
                <li><a href="#services">Repair &amp; troubleshooting</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">Our story</a></li>
                <li><a href="#why">Why Greenbelt</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#area">Service area</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <div className="nap" style={{ marginTop: 0 }}>
                Mon–Fri 7:30am–5:00pm<br />
                Serving all of Humboldt County<br /><br />
              </div>
              <a className="btn btn-primary" href="#contact">Request an Estimate</a>
            </div>
          </div>
          <div className="legal">
            <span>© {currentYear} Greenbelt Electrical LLC · CA C-10 #1053285 · All rights reserved.</span>
            <span style={{ display: 'flex', gap: 18 }}>
              <a href="#" style={{ textDecoration: 'none' }}>Privacy</a>
              <a href="#" style={{ textDecoration: 'none' }}>Accessibility</a>
              <a href="#" style={{ textDecoration: 'none' }}>Sitemap</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
