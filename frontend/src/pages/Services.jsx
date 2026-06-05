import React from 'react';
import { Helmet } from 'react-helmet-async';

const CTA_URL = '/book-call';

const roles = [
  {
    title: 'Customer Support',
    problem: 'Your support team is drowning. Tickets pile up. Response times slip. Quality suffers. Customers get frustrated.',
    solution: 'We build AI-powered response systems, routing workflows, and knowledge base tools that help your team resolve issues faster and more accurately.',
    result: "Faster responses. Happier customers. A support team that's finally ahead of the queue.",
  },
  {
    title: 'Marketing',
    problem: 'Your marketing team is stuck in production mode. Writing emails, drafting posts, designing campaigns — everything takes forever.',
    solution: 'We install AI content frameworks, campaign automation tools, and creative systems that let your marketers focus on strategy while AI handles the heavy lifting.',
    result: 'More campaigns. Better messaging. Less time spinning your wheels.',
  },
  {
    title: 'Sales',
    problem: 'Your sales team is juggling too much. Prospecting, follow-ups, proposals, CRM updates — leads fall through the cracks.',
    solution: 'We create AI-driven prospecting tools, follow-up automation, and proposal generation systems that keep your pipeline moving.',
    result: 'More conversations. Faster follow-up. Higher close rates.',
  },
  {
    title: 'Admin',
    problem: "Your admin team is the backbone of your business — but they're buried in repetitive, time-consuming tasks.",
    solution: 'We build AI systems that automate scheduling, document creation, data entry, and communication workflows.',
    result: 'More time for strategic work. Less time on admin drudgery.',
  },
  {
    title: 'Operations',
    problem: "Your operations processes are inconsistent. Knowledge lives in people's heads. New hires take forever to ramp up.",
    solution: 'We document, optimize, and AI-enhance your operational workflows — creating systems that scale as you grow.',
    result: 'Operations that run like clockwork. Teams that scale without chaos.',
  },
  {
    title: 'Leadership',
    problem: "You're making decisions with incomplete information. You don't have time to synthesize data, research options, or scenario-plan.",
    solution: 'We create AI-powered decision support systems, strategic planning tools, and executive communication workflows.',
    result: 'Clarity when you need it. Confidence in your decisions. Time back in your day.',
  },
];

const deliverables = [
  "Custom AI Workflows: Built specifically for your team's roles and responsibilities.",
  'Prompt Libraries: Pre-tested, ready-to-use prompts for every common task.',
  'Training Sessions: Hands-on enablement with your actual team, using your actual workflows.',
  "Implementation Support: We don't train and disappear. We help you deploy and refine.",
  'Performance Dashboards: Track productivity improvements and ROI in real time.',
  'Ongoing Optimization: As your business evolves, your AI systems evolve with you.',
];

const metrics = [
  { value: '40-60%', label: 'Reduction in task completion time' },
  { value: '25-50%', label: 'Increase in output per employee' },
  { value: '70-80%', label: 'Decrease in formatting and consistency errors' },
  { value: '50-70%', label: 'Faster onboarding for new hires' },
  { value: '10-20hrs', label: 'Saved per employee per week' },
];

const Services = () => {
  return (
    <div className="lr2">
      <Helmet>
        <title>AI Skills Development Programs & Training | LevReg.AI</title>
        <meta name="description" content="Custom AI systems for customer support, marketing, sales, and operations. Role-specific training that makes your team 3x more productive. See measurable results in 30 days." />
        <meta name="keywords" content="AI skills development, AI training programs, role-specific AI, customer support AI, marketing automation, sales AI tools" />
        <link rel="canonical" href="https://levreg.ai/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/services" />
        <meta property="og:title" content="AI Skills Development Programs & Training | LevReg.AI" />
        <meta property="og:description" content="Custom AI systems for customer support, marketing, sales, and operations." />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero center wrap">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">AI-POWERED SYSTEMS</span>
        </div>
        <h1>We install <em>AI systems</em>. You get your time back.</h1>
        <p className="lede">We don't sell information about AI. We provide the transformative systems that create permanent leverage in your business.</p>
      </section>

      {/* Overview */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 01 — The difference</span>
            <h2>This isn't a course. It's a <em>business upgrade</em>.</h2>
          </div>
          <div className="right">
            <p>Most AI training teaches theory. LevReg.AI installs systems.</p>
          </div>
        </div>
        <div className="prose">
          <p>We don't hand your team a chatbot and say "good luck." We build workflow-specific, role-specific, use-case-specific AI infrastructure designed around what your employees actually do every day. Then we train them to use it. Hands-on. Real scenarios. Immediate results.</p>
          <p className="big">By the time we're done, your team isn't just AI-aware — they're AI-enabled.</p>
        </div>
      </section>

      {/* Role-specific */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 02 — Method</span>
            <h2>Role-specific <em>AI development</em>.</h2>
          </div>
          <div className="right">
            <p>Custom AI systems built for every role in your business.</p>
          </div>
        </div>
        <div className="lr-grid cols-3">
          {roles.map((role) => (
            <div className="lr-card" key={role.title}>
              <h3>{role.title}</h3>
              <div>
                <div className="sub-k">The problem</div>
                <p>{role.problem}</p>
              </div>
              <div>
                <div className="sub-k" style={{ color: 'var(--accent)' }}>The solution</div>
                <p>{role.solution}</p>
              </div>
              <div>
                <div className="sub-k">The result</div>
                <p className="lead" style={{ fontSize: '15px', lineHeight: 1.5 }}>{role.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 03 — Deliverables</span>
            <h2>What you <em>actually</em> get.</h2>
          </div>
          <div className="right">
            <p>This isn't vaporware. When you work with LevReg.AI, you receive:</p>
          </div>
        </div>
        <div className="lr-grid cols-2">
          {deliverables.map((item, idx) => {
            const [head, ...rest] = item.split(':');
            return (
              <div className="lr-card" key={idx} style={{ minHeight: 'auto' }}>
                <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>{head}</h3>
                <p>{rest.join(':').trim()}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <section className="section wrap">
        <div className="s-head">
          <div className="left">
            <span className="num">// 04 — The numbers</span>
            <h2>The numbers don't <em>lie</em>.</h2>
          </div>
          <div className="right">
            <p>Our clients see measurable gains across every function. These aren't projections — they're results.</p>
          </div>
        </div>
        <div className="lr-grid cols-5">
          {metrics.map((metric, idx) => (
            <div className="lr-card" key={idx} style={{ minHeight: 'auto' }}>
              <span className="big-num">{metric.value}</span>
              <span className="sub-k" style={{ marginBottom: 0 }}>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>An investment that's a <em>multiplier</em>.</h2>
          <p>When your team works 60% faster, produces better work, and makes fewer mistakes, the ROI is immediate. Most clients see payback within 30 days. Want specifics? Let's talk about your team, your workflows, and your goals.</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
