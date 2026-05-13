import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSoloThankYou.css';
import './EmailSkillAccess.css';

const VIDALYTICS_MOUNT_ID = 'vidalytics_embed_XckDPY1nIh1gEGJE';

/** Vidalytics bootstrap (same as vendor embed; injected in useEffect so the mount div exists first). */
const VIDALYTICS_BOOTSTRAP = `(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState==="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', '${VIDALYTICS_MOUNT_ID}', 'https://fast.vidalytics.com/embeds/I5a5wJoO/XckDPY1nIh1gEGJE/');`;

const SKILL_DOWNLOAD_URL =
  'https://drive.google.com/drive/folders/15YDTnaqTR7xsUgK9YGOkyYpyrJdZ0Pnd?usp=sharing';

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

  useEffect(() => {
    const boot = document.createElement('script');
    boot.type = 'text/javascript';
    boot.textContent = VIDALYTICS_BOOTSTRAP;
    document.body.appendChild(boot);
    return () => {
      if (boot.parentNode) boot.parentNode.removeChild(boot);
      const mount = document.getElementById(VIDALYTICS_MOUNT_ID);
      if (mount) mount.innerHTML = '';
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
        <link rel="preconnect" href="https://fast.vidalytics.com" />
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
            <div className="es-vidalytics-host">
              <div
                id={VIDALYTICS_MOUNT_ID}
                style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
              />
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
                  Open the folder on Google Drive, download <strong>daily-email-engine.skill</strong>, and import it
                  into Claude (or your client) as a skill.
                </div>
                <div className="download-wrap">
                  <a
                    href={SKILL_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v13M7 11l5 5 5-5" />
                      <path d="M3 19h18" />
                    </svg>
                    Open Drive folder
                  </a>
                  <p className="download-note">Google Drive folder &middot; Daily Email Skill</p>
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
