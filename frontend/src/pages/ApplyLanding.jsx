import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { APPLY_LANDING_HTML } from './applyMarkup';
import './AiosLanding.css';
import './FunnelPages.css';

const TYPEFORM_EMBED_JS = 'https://embed.typeform.com/next/embed.js';

const ApplyLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const runTypeformLoad = () => {
      if (typeof window.tf?.load === 'function') {
        window.tf.load();
      }
    };

    const existingScript = document.querySelector('script[src*="embed.typeform.com/next/embed.js"]');
    if (existingScript) {
      queueMicrotask(runTypeformLoad);
      return undefined;
    }

    const script = document.createElement('script');
    script.src = TYPEFORM_EMBED_JS;
    script.async = true;
    document.body.appendChild(script);
    return undefined;
  }, []);

  return (
    <div className="aios-page">
      <Helmet>
        <title>Apply — Install Plan Application | LevReg.AI</title>
        <meta
          name="description"
          content="Step 1 of 2: Apply for your free Leverage AiOS Install Plan. Two minutes. No pressure — just clarity on whether we can help."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/apply" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: APPLY_LANDING_HTML }} />
    </div>
  );
};

export default ApplyLanding;
