import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSolo.css';
import './kit-form-lean.css';

const KIT_FORM_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "redirect",
      success_message: "Success! Now check your email to confirm your subscription.",
      redirect_url: "https://www.levreg.ai/lm/lean/access"
    },
    analytics: { google: null, fathom: null, facebook: null, segment: null, pinterest: null, sparkloop: null, googletagmanager: null },
    modal: { trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 },
    powered_by: { show: false, url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
    slide_in: { display_in: "bottom_right", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 },
    sticky_bar: { display_in: "top", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 }
  },
  version: "5"
});

const LeanBusiness = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF9F5';
    return () => { document.body.style.background = prev; };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.lm-stack-solo .formkit-form').forEach(form => {
      form.setAttribute('min-width', '400 500 600 700 800');
    });
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.lm-stack-solo .reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="lm-page lm-stack-solo">
      <Helmet>
        <title>The Lean Business System &mdash; LevReg.Ai</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className="lm-nav">
        <div className="container">
          <Link to="/lm/lean" className="nav-brand">LevReg.Ai</Link>
          <span className="nav-tagline">Human insight. AI speed.</span>
        </div>
      </nav>

      <div className="lm-main">
        <div className="container">

          <section className="hero">
            <p className="hero-eyebrow">Free Guide &middot; The Lean Business System</p>
            <h1 className="hero-headline">
              The automated business system most<br />solopreneurs{' '}
              <em>don&apos;t know<br />exists yet.</em>
            </h1>
            <p className="hero-sub">
              It&apos;s not ChatGPT. It&apos;s not another Zapier workflow. It&apos;s the exact sequence
              of AI agents that handles your lead generation, content, and customer follow-up,
              giving you the output of a 5-person business for $100/month. (Zero coding required).
            </p>
          </section>

          <div className="optin-box optin-box-hero">
            <p className="optin-label">Get the free guide</p>
            <h2 className="optin-heading">Send me The Lean Business System</h2>

            <form
              action="https://app.kit.com/forms/9255952/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="9255952"
              data-uid="590576b640"
              data-format="inline"
              data-version="5"
              data-options={KIT_FORM_OPTIONS}
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      aria-label="First Name"
                      name="fields[first_name]"
                      required
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </div>
                  <button data-element="submit" className="formkit-submit" type="submit">
                    <div className="formkit-spinner"><div></div><div></div><div></div></div>
                    <span>Get The Lean Business System</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="microcopy">Free. No spam. Unsubscribe any time.</p>
          </div>

          <hr className="divider animated" />

          <div className="body-copy reveal">
            <p><strong>Something is happening quietly.</strong></p>
            <p>
              A small group of solopreneurs figured out how to connect a specific set of AI agents
              in the right order. Not a complicated tech project. Not a six-month build. Just the
              right tools, the right logic, and the right sequence.
            </p>
            <p>
              The result is a business that generates leads, nurtures prospects, creates content,
              and follows up with customers while they&apos;re working on something else. Or sleeping.
              Or both.
            </p>
          </div>

          <div className="stat-block reveal">
            <div className="stat-item">
              <div className="stat-number">$3K&ndash;$10K</div>
              <div className="stat-label">saved per month by small businesses using AI automation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3X Your Output</div>
              <div className="stat-label">Take on 5 more clients without working weekends.</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">42%</div>
              <div className="stat-label">reduction in customer acquisition cost</div>
            </div>
          </div>
          <p className="stat-note reveal">
            Stop working like a freelancer. Start operating like a CEO with an AI-powered team.
          </p>

          <div className="body-copy mt-md reveal">
            <p>
              Most solopreneurs know AI can multiply their output. What they don&apos;t have is someone
              willing to show them the whole picture in one place. The actual tools. The exact order
              to build it. What each agent does and when.
            </p>
            <p><strong>That&apos;s what this guide is.</strong></p>
          </div>

          <hr className="divider reveal" />

          <div className="mt-md reveal">
            <p className="section-label">What&apos;s inside</p>
            <ul className="inside-list">
              <li className="inside-item">
                <span className="inside-num">01</span>
                <div className="inside-text">
                  <div className="inside-title">The complete Lean Business System, mapped end to end</div>
                  <div className="inside-desc">Marketing, Sales, and Customer Success. Every agent, explained plainly.</div>
                </div>
              </li>
              <li className="inside-item">
                <span className="inside-num">02</span>
                <div className="inside-text">
                  <div className="inside-title">The build order that actually works</div>
                  <div className="inside-desc">Most people start with the wrong agent first. This shows you where to begin and why.</div>
                </div>
              </li>
              <li className="inside-item">
                <span className="inside-num">03</span>
                <div className="inside-text">
                  <div className="inside-title">The tools behind each agent</div>
                  <div className="inside-desc">Specific, named tools. No vague recommendations. What to use, what to skip.</div>
                </div>
              </li>
              <li className="inside-item">
                <span className="inside-num">04</span>
                <div className="inside-text">
                  <div className="inside-title">The shortcuts I didn&apos;t find until month six</div>
                  <div className="inside-desc">The integrations and logic that most people figure out too late.</div>
                </div>
              </li>
              <li className="inside-item">
                <span className="inside-num">05</span>
                <div className="inside-text">
                  <div className="inside-title">What this stack replaces</div>
                  <div className="inside-desc">The math on replacing a $3,000&ndash;$10,000/month agency retainer with a $300/month system.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="for-block reveal">
            <p className="section-label">This is for you if</p>
            <div className="for-row">
              <strong>You&apos;re building a serious business alone</strong> and you&apos;re tired of
              being the bottleneck in your own operation.
            </div>
            <div className="for-row">
              <strong>You&apos;ve experimented with AI tools</strong> but haven&apos;t built anything
              that actually runs without you.
            </div>
            <div className="for-row">
              <strong>You know the stack exists</strong> and you just want someone to show
              you the whole picture at once.
            </div>
          </div>

          <div className="optin-box reveal">
            <p className="optin-label">Get the free guide</p>
            <h2 className="optin-heading">Send me The Lean Business System</h2>

            <form
              action="https://app.kit.com/forms/9255952/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="9255952"
              data-uid="590576b640"
              data-format="inline"
              data-version="5"
              data-options={KIT_FORM_OPTIONS}
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      aria-label="First Name"
                      name="fields[first_name]"
                      required
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </div>
                  <button data-element="submit" className="formkit-submit" type="submit">
                    <div className="formkit-spinner"><div></div><div></div><div></div></div>
                    <span>Get The Lean Business System</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="microcopy">Free. No spam. Unsubscribe any time.</p>
          </div>

        </div>
      </div>

      <footer className="lm-footer">
        <div className="container">
          <p className="footer-text">
            LevReg.Ai is built for the one-person company.<br />
            Human insight. AI speed. That&apos;s the whole model.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LeanBusiness;
