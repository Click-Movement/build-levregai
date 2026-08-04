import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PLAN_LANDING_HTML } from './planMarkup';
import './AiosLanding.css';
import './FunnelPages.css';

const PlanLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aios-page">
      <Helmet>
        <title>Get Your Install Plan — Leverage AiOS | LevReg.AI</title>
        <meta
          name="description"
          content="Find out if your company is ready for Leverage AiOS. Get a free install plan mapping which engine goes in first and what it would ship in week one."
        />
        <link rel="canonical" href="https://levreg.ai/plan" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: PLAN_LANDING_HTML }} />
    </div>
  );
};

export default PlanLanding;
