import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';

const CTA_URL = '/book-call';

const Blog = () => {
  return (
    <div className="lr2">
      <Helmet>
        <title>AI Strategy & Business Insights | LevReg.AI</title>
        <meta name="description" content="Practical insights on AI implementation, team management, and business operations. Learn how to leverage AI agents to improve your business." />
        <meta name="keywords" content="AI strategy, business automation, AI agents, team management, business insights" />
        <link rel="canonical" href="https://levreg.ai/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/blog" />
        <meta property="og:title" content="AI Strategy & Business Insights | LevReg.AI" />
        <meta property="og:description" content="Practical insights on AI implementation, team management, and business operations." />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero center wrap">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">INSIGHTS & STRATEGY</span>
        </div>
        <h1>AI insights for <em>smart</em> business owners.</h1>
        <p className="lede">Practical insights on AI implementation, team management, and building systems that scale without burning out your best people.</p>
      </section>

      {/* Articles grid */}
      <section className="section wrap" style={{ paddingTop: 'clamp(24px, 3vw, 48px)' }}>
        {blogArticles.length === 0 ? (
          <p className="mono-label" style={{ textAlign: 'center' }}>Articles coming soon…</p>
        ) : (
          <div className="lr-grid cols-3">
            {blogArticles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`} className="lr-card">
                <span className="eyebrow">{article.category}</span>
                <h3>{article.title}</h3>
                {article.subtitle && <p className="lead">{article.subtitle}</p>}
                <p>{article.excerpt}</p>
                <span className="more">Read article <span className="arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Ready to apply these <em>insights</em>?</h2>
          <p>Reading about AI is one thing. Installing systems that transform your business is another. Let's build your implementation roadmap.</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
          </div>
          <div className="fine" style={{ color: 'var(--muted)' }}>Free discovery session · No pressure · Just clarity</div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
