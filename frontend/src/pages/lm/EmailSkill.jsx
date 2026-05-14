import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './lm-shared.css';
import './StackSolo.css';
import './kit-form-emailskill.css';

const OG_PAGE_URL = 'https://levreg.ai/lm/emailskill';
const OG_IMAGE_URL = 'https://levreg.ai/og/lm-emailskill.jpg';
const OG_IMAGE_WIDTH = 1126;
const OG_IMAGE_HEIGHT = 242;
const OG_TITLE = 'Email System Claude Skill | LevReg.Ai';
const OG_DESCRIPTION =
  '21 years in marketing with millions sold using email. Get the Claude skill built from that system.';

const KIT_FORM_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: 'redirect',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: 'https://www.levreg.ai/lm/emailskill/access',
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
    powered_by: {
      show: false,
      url: 'https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic',
    },
    recaptcha: { enabled: false },
    return_visitor: { action: 'show', custom_content: '' },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
  },
  version: '5',
});

const EmailSkill = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF9F5';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.lm-stack-solo .formkit-form').forEach((form) => {
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

  return (
    <div className="lm-page lm-stack-solo">
      <Helmet>
        <title>Email System Claude Skill &mdash; LevReg.Ai</title>
        <meta name="description" content={OG_DESCRIPTION} />
        <link rel="canonical" href={OG_PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={OG_PAGE_URL} />
        <meta property="og:title" content={OG_TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:site_name" content="LevReg.Ai" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
        <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
        <meta property="og:image:alt" content="LevReg.Ai — Email system as a Claude skill" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content={OG_TITLE} />
        <meta name="twitter:description" content={OG_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

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
          <section className="hero">
            <p className="hero-eyebrow">Free Claude skill</p>
            <h1 className="hero-headline">
              21 yrs in Marketing With Millions Sold Using Email and I Just Turned My Email System Into A
              Claude Skill.
            </h1>
          </section>

          <div className="optin-box optin-box-hero">
            <p className="optin-label">Get instant access</p>
            <h2 className="optin-heading">Send me the skill</h2>

            <form
              action="https://app.kit.com/forms/9439982/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="9439982"
              data-uid="0955380931"
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
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Email Address"
                      required
                      type="email"
                    />
                  </div>
                  <button data-element="submit" className="formkit-submit" type="submit">
                    <div className="formkit-spinner">
                      <div />
                      <div />
                      <div />
                    </div>
                    <span>Download Skill</span>
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
            LevReg.Ai is built for the one-person company.
            <br />
            Human insight. AI speed. That&apos;s the whole model.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EmailSkill;
