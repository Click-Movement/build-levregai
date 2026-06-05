import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../data/caseStudiesData';

const CTA_URL = '/book-call';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const relatedStudies = getRelatedCaseStudies(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="lr2">
        <section className="section wrap" style={{ textAlign: 'center' }}>
          <h1 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Case study not found</h1>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link to="/case-studies" className="btn btn-primary btn-lg">← Back to case studies</Link>
          </div>
        </section>
      </div>
    );
  }

  const metricsArray = Object.entries(caseStudy.metrics);

  return (
    <div className="lr2">
      <Helmet>
        <title>{`${caseStudy.title} - ${caseStudy.subtitle} | LevReg.AI Case Study`}</title>
        <meta name="description" content={`${caseStudy.subtitle}. See how we helped transform this business with AI implementation. ${caseStudy.problem.substring(0, 100)}...`} />
        <meta name="keywords" content={`AI case study, ${caseStudy.industry}, ${caseStudy.title}, business automation, AI transformation`} />
        <link rel="canonical" href={`https://levreg.ai/case-studies/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://levreg.ai/case-studies/${slug}`} />
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.subtitle}`} />
        <meta property="og:description" content={caseStudy.subtitle} />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <Link to="/case-studies">Case Studies</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="here">{caseStudy.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero wrap">
        <div className="hero-eyebrow">
          <span className="mono-label k">{caseStudy.industry}</span>
          <span className="sep" aria-hidden="true" style={{ width: '1px', height: '14px', background: 'var(--line-strong)', opacity: .3 }}></span>
          <span className="mono-label" style={{ color: 'var(--accent)' }}>{caseStudy.pillar}</span>
        </div>
        <h1>{caseStudy.title}</h1>
        <p className="lede" style={{ color: 'var(--fg)', fontWeight: 500 }}>{caseStudy.subtitle}</p>

        {/* Key metrics */}
        <div className="lr-grid cols-3" style={{ marginTop: '48px' }}>
          {metricsArray.map(([key, value], idx) => (
            <div className="lr-card" key={idx} style={{ minHeight: 'auto' }}>
              <span className="big-num">{value}</span>
              <span className="sub-k" style={{ marginBottom: 0 }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="section wrap" style={{ paddingTop: 'clamp(24px, 3vw, 48px)' }}>
        <div className="article">
          <h2>The problem</h2>
          {caseStudy.problem.split('\n\n').map((p, idx) => <p key={idx}>{p}</p>)}

          <h2>The system we installed</h2>
          <ul>
            {caseStudy.system.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <h2>The result</h2>
          {caseStudy.result.split('\n\n').map((p, idx) => (
            idx === 0 ? <p key={idx} className="lead-p">{p}</p> : <p key={idx}>{p}</p>
          ))}

          {/* Core principle */}
          <div className="callout" style={{ marginTop: '40px' }}>
            <div className="lbl accent">Core principle · {caseStudy.pillar}</div>
            <p className="q">"{caseStudy.quote}"</p>
            {caseStudy.principle.split('\n\n').map((p, idx) => (
              <p key={idx} style={{ color: 'var(--muted)', marginTop: idx === 0 ? '12px' : '8px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedStudies.length > 0 && (
        <section className="section wrap">
          <div className="s-head">
            <div className="left">
              <span className="num">// More</span>
              <h2>Related <em>case studies</em>.</h2>
            </div>
            <div className="right">
              <p>More examples of successful AI implementations.</p>
            </div>
          </div>
          <div className="lr-grid cols-3">
            {relatedStudies.map((study) => (
              <Link key={study.id} to={`/case-studies/${study.slug}`} className="lr-card">
                <span className="eyebrow">{study.industry}</span>
                <h3>{study.title}</h3>
                <p className="lead">{study.subtitle}</p>
                <span className="more">Read case study <span className="arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Want similar results for <em>your business</em>?</h2>
          <p>This isn't a unique case. It's what happens when you install AI systems built specifically for your workflows. Let's talk about what we can build for you.</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
            <Link to="/case-studies" className="btn btn-lg">← View all case studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
