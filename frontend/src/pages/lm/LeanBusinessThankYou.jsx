import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSoloThankYou.css';

const LeanBusinessThankYou = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF9F5';
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="lm-page lm-stack-solo-ty">
      <Helmet>
        <title>Your Lean Business System Is On Its Way &mdash; LevReg.Ai</title>
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

          <section className="confirm-section">
            <div className="check-wrap">
              <svg viewBox="0 0 20 20">
                <path d="M4 10.5l4.5 4.5 7.5-9" />
              </svg>
            </div>

            <p className="confirm-eyebrow a1">You&apos;re in</p>
            <h1 className="confirm-headline a2">
              The blueprint for your new<br />team is{' '}<em>on its way.</em>
            </h1>
            <p className="confirm-sub a3">
              Check your inbox. The Lean Business System guide will be there shortly.
              We included a bonus prompt to get started.
              In the meantime, here is how to prepare for your new &ldquo;hires.&rdquo;
            </p>
          </section>

          <hr className="divider a4" />

          <div className="a5">
            <p className="section-label">While you wait</p>
            <ul className="next-list">
              <li className="next-item">
                <span className="next-num">01</span>
                <div className="next-text">
                  <div className="next-title">Start with your Marketing &ldquo;Hire&rdquo;</div>
                  <div className="next-desc">
                    The guide walks you through the exact build order. You must start with
                    marketing &mdash; without leads, the rest of your AI team has nothing to do. Don&apos;t skip ahead.
                  </div>
                </div>
              </li>
              <li className="next-item">
                <span className="next-num">02</span>
                <div className="next-text">
                  <div className="next-title">Pick tools with staying power</div>
                  <div className="next-desc">
                    A new AI tool shows up every week. Ignore the hype. Build your team using
                    platforms that have been around, are actively improving, and won&apos;t disappear in 18 months.
                  </div>
                </div>
              </li>
              <li className="next-item">
                <span className="next-num">03</span>
                <div className="next-text">
                  <div className="next-title">Onboard one agent at a time</div>
                  <div className="next-desc">
                    This is not hard to do as long as you take it step by step.
                    Resist the urge to build everything at once. One fully functioning AI agent beats
                    five half-built workflows.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bridge-block a6">
            <p className="bridge-eyebrow">Want it done for you?</p>
            <h2 className="bridge-headline">
              LevReg.Ai hands you a fully trained<br />AI team, ready to work.
            </h2>
            <p className="bridge-body">
              Marketing, Sales, and Customer Success&mdash;pre-built, connected, and
              customized to your specific business. You get the exact system outlined in
              the guide, without spending months building it yourself. Get the output of
              a 5-person agency for a fraction of the cost.
            </p>
            <a href="https://www.levreg.ai/book-call" className="bridge-btn">
              Book A Free AI Audit
            </a>
            <p className="bridge-note">No commitment. No sales call required.</p>
          </div>

          <div className="a6">
            <div className="delivery-card">
              <div className="delivery-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="delivery-content">
                <div className="delivery-title">The Lean Business System &mdash; Free Guide</div>
                <div className="delivery-desc">
                  Sent to your inbox now. If it doesn&apos;t arrive in the next few minutes,
                  check your spam folder and mark it as not spam.
                </div>
                <div className="download-wrap">
                  <a href="https://drive.google.com/file/d/1dgGBDzjv4AMQ1K_ZPewC3lLNyYJQVba_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v13M7 11l5 5 5-5" />
                      <path d="M3 19h18" />
                    </svg>
                    Download directly
                  </a>
                  <p className="download-note">PDF &middot; 10 pages &middot; Free</p>
                </div>
              </div>
            </div>
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

export default LeanBusinessThankYou;
