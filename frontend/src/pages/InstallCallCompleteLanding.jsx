import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { INSTALL_CALL_COMPLETE_HTML } from './installCallCompleteMarkup';
import './AiosLanding.css';
import './FunnelPages.css';

const InstallCallCompleteLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aios-page">
      <Helmet>
        <title>Install Plan Booked — You're Confirmed | LevReg.AI</title>
        <meta
          name="description"
          content="Your Install Plan call is locked in. Check your inbox for the calendar invite, then review the prep checklist before we talk."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/install-call-complete" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: INSTALL_CALL_COMPLETE_HTML }} />
    </div>
  );
};

export default InstallCallCompleteLanding;
