import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const BEEHIIV_FORM_ID = '9ade5905-dba5-43b4-ac80-e951bb833ea7';

const Newsletter = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const node = formRef.current;
    if (!node) return undefined;

    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
    script.async = true;
    script.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID);
    node.appendChild(script);

    return () => {
      if (node.contains(script)) node.removeChild(script);
    };
  }, []);

  return (
    <div className="lr2">
      <Helmet>
        <title>How To Leverage AI — Free Newsletter | LevReg.AI</title>
        <meta
          name="description"
          content="Stop collecting AI tips. Install an AI workforce that doubles your sales and optimizes your profit margin. Simple guides to leverage AI, free."
        />
        <link rel="canonical" href="https://levreg.ai/newsletter" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/newsletter" />
        <meta property="og:title" content="How To Leverage AI — Free Newsletter | LevReg.AI" />
        <meta
          property="og:description"
          content="Stop collecting AI tips. Install an AI workforce that doubles your sales and optimizes your profit margin. Simple guides to leverage AI, free."
        />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      <section className="section wrap" style={{ textAlign: 'center' }}>
        <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">FREE NEWSLETTER</span>
        </div>

        <h1 className="headline" style={{ maxWidth: '16ch', margin: '0 auto 24px', fontSize: 'clamp(38px, 5.1vw, 90px)' }}>
          How To <em>Leverage</em> AI
        </h1>

        <p className="hero-sub" style={{ margin: '0 auto 20px', maxWidth: '60ch' }}>
          Stop collecting AI tips. Install an Ai Workforce that will double your sales and optimize your profit margin. Get simple guides you can use follow to Leverage Ai. Free.
        </p>

        <div
          ref={formRef}
          className="newsletter-form"
          style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}
        />
      </section>
    </div>
  );
};

export default Newsletter;
