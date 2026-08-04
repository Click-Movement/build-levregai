import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { INSTALL_CALL_LANDING_HTML } from './installCallMarkup';
import './AiosLanding.css';
import './FunnelPages.css';

const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';

const InstallCallLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mount = document.getElementById('funnel-calendly');
    if (!mount) return undefined;

    const initWidget = () => {
      if (typeof window.Calendly?.initInlineWidget !== 'function') return;
      // Clear prior iframe on SPA revisit, then remount.
      mount.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: mount.getAttribute('data-url'),
        parentElement: mount,
      });
    };

    const existingScript = document.querySelector(`script[src="${CALENDLY_WIDGET_JS}"]`);
    if (existingScript) {
      queueMicrotask(initWidget);
      return undefined;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_WIDGET_JS;
    script.async = true;
    script.onload = initWidget;
    document.head.appendChild(script);
    return undefined;
  }, []);

  return (
    <div className="aios-page">
      <Helmet>
        <title>Book Your Install Plan Call | LevReg.AI</title>
        <meta
          name="description"
          content="Step 2 of 2: Lock in your 30-minute Install Plan call. Leave knowing which engine goes in first and what it would ship in week one."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/install-call" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: INSTALL_CALL_LANDING_HTML }} />
    </div>
  );
};

export default InstallCallLanding;
