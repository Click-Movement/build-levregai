import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSoloThankYou.css';

const StackSoloThankYou = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF9F5';
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="lm-page lm-stack-solo-ty">
      <Helmet>
        <title>Your Guide Is On Its Way &mdash; Customer Automation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className="lm-nav">
        <div className="container">
          <Link to="/lm/stack-solo" className="nav-brand">Customer Automation</Link>
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
              Your guide is<br /><em>on its way.</em>
            </h1>
            <p className="confirm-sub a3">
              Check your inbox. The AI Agent Stack guide will be there shortly.
              While you wait, here&apos;s what to do next.
            </p>
          </section>

          <hr className="divider a4" />

          <div className="a4">
            <div className="delivery-card">
              <div className="delivery-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="delivery-content">
                <div className="delivery-title">The AI Agent Stack &mdash; Free Guide</div>
                <div className="delivery-desc">
                  Sent to your inbox now. If it doesn&apos;t arrive in the next few minutes,
                  check your spam folder and mark it as not spam.
                </div>
                <div className="download-wrap">
                  {/* Replace href with your actual PDF URL */}
                  <a href="CustomerAutomation_AIAgentStack_Guide.pdf" download className="download-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v13M7 11l5 5 5-5" />
                      <path d="M3 19h18" />
                    </svg>
                    Download directly
                  </a>
                  <p className="download-note">PDF &middot; 8 pages &middot; Free</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider a5" />

          <div className="a5">
            <p className="section-label">While you wait</p>
            <ul className="next-list">
              <li className="next-item">
                <span className="next-num">01</span>
                <div className="next-text">
                  <div className="next-title">Start with the Marketing Department</div>
                  <div className="next-desc">
                    The guide walks you through build order. Marketing first &mdash; without leads,
                    nothing else in the stack matters. Don&apos;t skip ahead.
                  </div>
                </div>
              </li>
              <li className="next-item">
                <span className="next-num">02</span>
                <div className="next-text">
                  <div className="next-title">Pick tools with staying power</div>
                  <div className="next-desc">
                    Something new shows up every week. Ignore it. Build on the tools that
                    have been around, are actively improving, and won&apos;t disappear in 18 months.
                  </div>
                </div>
              </li>
              <li className="next-item">
                <span className="next-num">03</span>
                <div className="next-text">
                  <div className="next-title">Build one agent at a time</div>
                  <div className="next-desc">
                    This is not hard to do as long as you build it one brick at a time.
                    Resist the urge to do everything at once. One agent running beats
                    five agents half-built.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bridge-block a6">
            <p className="bridge-eyebrow">Want it built for you?</p>
            <h2 className="bridge-headline">
              Customer Automation gives you all three<br />departments, ready to run.
            </h2>
            <p className="bridge-body">
              Marketing, Sales, and Customer Success &mdash; pre-built, connected, and
              customized to your business. The stack in the guide, without the build time.
              For a fraction of what an agency costs.
            </p>
            {/* Replace href with your actual product URL */}
            <a href="https://customerautomation.com" className="bridge-btn">
              See how it works
            </a>
            <p className="bridge-note">No commitment. No sales call required.</p>
          </div>

        </div>
      </div>

      <footer className="lm-footer">
        <div className="container">
          <p className="footer-text">
            Customer Automation is built for the one-person company.<br />
            Human insight. AI speed. That&apos;s the whole model.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StackSoloThankYou;
