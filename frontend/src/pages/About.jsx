import React from 'react';
import { Helmet } from 'react-helmet-async';

const CTA_URL = '/book-call';

const values = [
  {
    title: 'Practicality Over Hype',
    description: "We don't care about buzzwords. We care about results. If it doesn't make your team faster or better, we don't build it.",
  },
  {
    title: 'People-First Technology',
    description: 'AI should make employees feel like superheroes, not make them feel replaceable. Every system we build puts humans in control.',
  },
  {
    title: 'Small Business Obsession',
    description: "We're not building for enterprises. We're building for the businesses that can't afford to waste time or money on tools that don't work.",
  },
  {
    title: 'Accountability',
    description: "We measure everything. If we say you'll see productivity gains, we track them. If something doesn't work, we fix it.",
  },
];

const About = () => {
  return (
    <div className="lr2">
      <Helmet>
        <title>About LevReg.AI - Making Small Businesses AI-First</title>
        <meta name="description" content="LevReg.AI was built to help small business CEOs implement AI without becoming experts. We install, train, and support your team's AI transformation journey." />
        <meta name="keywords" content="about LevReg AI, AI transformation, small business AI expert, AI-first business, employee AI enablement" />
        <link rel="canonical" href="https://levreg.ai/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/about" />
        <meta property="og:title" content="About LevReg.AI - Making Small Businesses AI-First" />
        <meta property="og:description" content="LevReg.AI was built to help small business CEOs implement AI without becoming experts." />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero center wrap">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">OUR STORY</span>
        </div>
        <h1>We exist so business owners don't have to become <em>AI experts</em>.</h1>
        <p className="lede">The story behind the mission to make every small business AI-first.</p>
      </section>

      {/* Founder story */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 01 — Origin</span>
            <h2>It started with a <em>simple</em> question.</h2>
          </div>
          <div className="right">
            <p>"Why are small businesses getting left behind?" We saw it everywhere — and decided to do something about it.</p>
          </div>
        </div>
        <div className="prose">
          <p className="big">"Why are small businesses getting left behind?"</p>
          <p>We saw it everywhere. CEOs drowning in work. Teams buried in manual tasks. Everyone knowing AI could help, but no one having the time or expertise to make it happen.</p>
          <p>The big companies? They hire AI teams. They build internal systems. They move fast.</p>
          <p>Small businesses? They get sold courses. Generic chatbot access. Vague promises about "transformation." <strong>That's not training. That's abandonment.</strong></p>
          <p className="big">So we built something different. LevReg.AI isn't a course. It's not a tool. It's a full-service AI enablement partner that comes into your business, understands your workflows, and installs systems your team can actually use. We do the hard part, so you can focus on running your business.</p>
        </div>
      </section>

      {/* AI-First vision */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 02 — Vision</span>
            <h2>What it means to be <em>AI-first</em>.</h2>
          </div>
          <div className="right">
            <p>An AI-first company doesn't replace humans with robots. It amplifies human capability with intelligent systems.</p>
          </div>
        </div>
        <div className="prose">
          <span className="check">Your customer support team answers twice as many tickets without working longer hours.</span>
          <span className="check">Your marketing team ships campaigns in days instead of weeks.</span>
          <span className="check">Your operations run smoothly even when someone's on vacation.</span>
          <span className="check">Your employees feel empowered, not overwhelmed.</span>
          <p className="big">That's what we're building. One small business at a time.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 03 — Philosophy</span>
            <h2>Technology <em>enhances</em> people. It doesn't replace them.</h2>
          </div>
          <div className="right">
            <p>We believe in a future where AI makes work better — not scarcer.</p>
          </div>
        </div>
        <div className="prose">
          <p>Where employees feel more capable, not more anxious. Where small businesses compete on speed and intelligence, not just budget. Where the tools are so good, so intuitive, and so specific to your needs that using them feels like an unfair advantage.</p>
          <p className="big">That's not a distant dream. That's what we're installing right now.</p>
        </div>
      </section>

      {/* Values */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 04 — What drives us</span>
            <h2>The principles behind every <em>install</em>.</h2>
          </div>
          <div className="right">
            <p>The principles that guide everything we build.</p>
          </div>
        </div>
        <div className="lr-grid cols-2">
          {values.map((value) => (
            <div className="lr-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why now + stats */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 05 — Why now</span>
            <h2>Small businesses can't <em>afford</em> to wait.</h2>
          </div>
          <div className="right">
            <p>AI isn't coming. It's here. Your competitors are using it. The gap between AI-enabled businesses and everyone else is widening every day.</p>
          </div>
        </div>
        <div className="lr-grid cols-3">
          <div className="lr-card">
            <span className="big-num">3×</span>
            <span className="sub-k" style={{ marginBottom: 0 }}>Average productivity increase</span>
          </div>
          <div className="lr-card">
            <span className="big-num">30 days</span>
            <span className="sub-k" style={{ marginBottom: 0 }}>To ROI for most clients</span>
          </div>
          <div className="lr-card">
            <span className="big-num">100%</span>
            <span className="sub-k" style={{ marginBottom: 0 }}>Focused on small businesses</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>You can close the gap. But only if you <em>act now</em>.</h2>
          <p>Start your AI transformation with a free discovery call. No pressure — just clarity on what AI can do for your business.</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
