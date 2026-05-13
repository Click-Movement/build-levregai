import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSoloThankYou.css';
import './EmailSkillAccess.css';

/** Paste embed src when the video is ready (e.g. https://www.youtube.com/embed/VIDEO_ID or Loom share embed URL). */
const VIDEO_EMBED_SRC = '';

const SKILL_FILE_URL =
  'https://drive.google.com/file/d/1MXE6vE482KqnsteKgPSxDdEMnV6fLq5m/view?usp=sharing';

const EmailSkillAccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF9F5';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="lm-page lm-stack-solo-ty es-access">
      <Helmet>
        <title>You&apos;re In &mdash; Email Skill | LevReg.Ai</title>
        <meta
          name="description"
          content="Watch the video, book your AI Forward Assessment, and download the Claude skill."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/lm/emailskill/access" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className="lm-nav">
        <div className="container">
          <Link to="/lm/emailskill" className="nav-brand">
            LevReg.Ai
          </Link>
          <span className="nav-tagline">Human insight. AI speed.</span>
        </div>
      </nav>

      <div className="lm-main">
        <div className="container">
          <h1 className="es-hero-title">Here Is What To Do Next&hellip;</h1>

          <div className="es-video-wrap">
            <div className="es-video-inner">
              {VIDEO_EMBED_SRC ? (
                <iframe
                  title="Welcome video"
                  src={VIDEO_EMBED_SRC}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="es-video-placeholder">
                  <p>
                    Your welcome video will appear here. Drop the embed URL into VIDEO_EMBED_SRC in
                    EmailSkillAccess.jsx when it&apos;s ready.
                  </p>
                </div>
              )}
            </div>
          </div>

          <h2 className="es-block-title es-cal-headline">Schedule a Free AI Forward Assessment</h2>

          <div className="es-cal-wrap">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/levregai/audit"
              style={{
                width: '100%',
                height: '700px',
                overflow: 'auto',
              }}
            />
          </div>

          <div className="es-download-wrap">
            <div className="delivery-card">
              <div className="delivery-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="delivery-content">
                <div className="delivery-title">daily-email-engine.skill</div>
                <div className="delivery-desc">
                  Claude skill file. Download from Google Drive and import into Claude (or your client) as a skill.
                </div>
                <div className="download-wrap">
                  <a
                    href={SKILL_FILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v13M7 11l5 5 5-5" />
                      <path d="M3 19h18" />
                    </svg>
                    Download skill file
                  </a>
                  <p className="download-note">Google Drive &middot; .skill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="lm-footer">
        <div className="container">
          <p className="footer-text">
            LevReg.Ai is built for the one-person company.
            <br />
            Human insight. AI speed. That&apos;s the whole model.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EmailSkillAccess;
