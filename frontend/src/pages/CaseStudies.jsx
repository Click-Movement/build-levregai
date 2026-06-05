import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudiesData';

const CTA_URL = '/book-call';

const philosophyPillars = [
  {
    title: 'Implementation Over Information',
    description: 'Information is free. Implementation is valuable. Installation is rare.',
  },
  {
    title: 'Systems Over Tools',
    description: "If your AI strategy is 'use this tool,' you don't have a strategy — you have a dependency.",
  },
  {
    title: 'Automation Before Delegation',
    description: "If you're hiring for tasks that don't require judgment, you're building a job, not a business.",
  },
  {
    title: 'Leverage Over Revenue',
    description: 'Revenue is what you make. Leverage is what you keep — in money and time.',
  },
  {
    title: 'Time Freedom',
    description: "If your business can't run without you, you don't own a business — you ARE the business.",
  },
];

const CaseStudies = () => {
  return (
    <div className="lr2">
      <Helmet>
        <title>AI Implementation Case Studies | Real Results | LevReg.AI</title>
        <meta name="description" content="See how businesses transformed with AI. From 3-hour tasks to 5 minutes, 15 daily articles automated, and more. Real implementations, real results." />
        <meta name="keywords" content="AI case studies, AI implementation examples, business automation results, AI transformation success stories" />
        <link rel="canonical" href="https://levreg.ai/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/case-studies" />
        <meta property="og:title" content="AI Implementation Case Studies | Real Results | LevReg.AI" />
        <meta property="og:description" content="See how businesses transformed with AI. Real implementations, real results." />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero center wrap">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">CLIENT CASE STUDIES</span>
        </div>
        <h1>Real systems. <em>Real results</em>.</h1>
        <p className="lede">See how businesses like yours transformed their operations with AI. From 3-hour tasks to 5 minutes, manual processes to automated systems, and overwhelmed teams to empowered operations.</p>
      </section>

      {/* Case studies grid */}
      <section className="section wrap" style={{ paddingTop: 'clamp(24px, 3vw, 48px)' }}>
        <div className="lr-grid cols-3">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.slug}`} className="lr-card">
              <span className="eyebrow">{study.industry}</span>
              <h3>{study.title}</h3>
              <p className="lead">{study.subtitle}</p>
              <p>{study.problem.split('\n')[0]}</p>
              <span className="more">Read case study <span className="arrow" aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// Principles</span>
            <h2>Our core <em>principles</em>.</h2>
          </div>
          <div className="right">
            <p>Every case study demonstrates one of our fundamental principles for AI transformation.</p>
          </div>
        </div>
        <div className="lr-grid cols-3">
          {philosophyPillars.map((pillar) => (
            <div className="lr-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p style={{ fontStyle: 'italic' }}>"{pillar.description}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Your business <em>could be next</em>.</h2>
          <p>These aren't exceptional cases. They're what happens when you install AI systems built specifically for your business. Want similar results?</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
          </div>
          <div className="fine" style={{ color: 'var(--muted)' }}>Free discovery session · No pressure · Just clarity</div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
