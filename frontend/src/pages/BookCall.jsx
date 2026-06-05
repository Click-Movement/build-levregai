import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const BookCall = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="lr2">
      <Helmet>
        <title>Book Your Free Ai Discovery Call | LevReg.AI</title>
        <meta name="description" content="Schedule your free AI discovery call. Choose a time that works for you." />
        <meta name="keywords" content="book call, schedule meeting, AI consultation, discovery call" />
        <link rel="canonical" href="https://levreg.ai/book-call" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/book-call" />
        <meta property="og:title" content="Book Your Free Ai Discovery Call | LevReg.AI" />
        <meta property="og:description" content="Schedule your free AI discovery call. Choose a time that works for you." />
        <meta property="og:site_name" content="LevReg.AI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="Book Your Free Ai Discovery Call | LevReg.AI" />
        <meta name="twitter:description" content="Schedule your free AI discovery call. Choose a time that works for you." />
      </Helmet>

      {/* Intro */}
      <section className="section wrap" style={{ textAlign: 'center', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
        <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">SCHEDULE YOUR CALL</span>
        </div>
        <h1 className="headline" style={{ maxWidth: '20ch', margin: '0 auto 28px', fontSize: 'clamp(38px, 5.1vw, 90px)' }}>
          Book Your Free <em>Ai Discovery Call</em>
        </h1>
        <p className="hero-sub" style={{ margin: '0 auto 0', maxWidth: '60ch' }}>
          Choose a time that works best for you. We'll discuss your business, identify AI opportunities, and create a personalized roadmap.
        </p>
      </section>

      {/* Calendly embed */}
      <section className="wrap" style={{ paddingBottom: 'clamp(72px, 9vw, 144px)' }}>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/levregai/audit"
          style={{
            width: '100%',
            height: '700px',
            overflow: 'auto',
            border: '1px solid var(--line)',
          }}
        />
      </section>
    </div>
  );
};

export default BookCall;
