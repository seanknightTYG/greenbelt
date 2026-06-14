'use client';

import Script from 'next/script';

export default function HcpLeadForm() {
  return (
    <div className="hcp-form-wrap">
      <Script
        src="https://online-booking.housecallpro.com/script.js?token=51c98e84415643c1bd032ebc7d497d42&orgName=Greenbelt-Electrical"
        strategy="afterInteractive"
      />
      <iframe
        id="hcp-lead-iframe"
        src="https://book.housecallpro.com/lead-form/Greenbelt-Electrical/51c98e84415643c1bd032ebc7d497d42"
        style={{ border: 'none', width: '100%', minHeight: 520 }}
        title="Request a free estimate from Greenbelt Electrical"
        loading="lazy"
      />
    </div>
  );
}
