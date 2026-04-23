import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Waitlist.css';

const KIT_FORM_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: 'redirect',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: 'https://www.levreg.ai/waitlist/confirmed'
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null
    },
    modal: { trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 },
    powered_by: {
      show: false,
      url: 'https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic'
    },
    recaptcha: { enabled: false },
    return_visitor: { action: 'show', custom_content: '' },
    slide_in: { display_in: 'bottom_right', trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 },
    sticky_bar: { display_in: 'top', trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 }
  },
  version: '5'
});

const Waitlist = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.head.appendChild(script);

    const form = document.querySelector('.waitlist-page .formkit-form');
    if (form) {
      form.setAttribute('min-width', '400 500 600 700 800');
    }

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="waitlist-page">
      <Helmet>
        <title>LevregAi - Join the Waitlist</title>
      </Helmet>

      <div className="waitlist-container">
        <img
          className="waitlist-logo"
          src="/LevReg_BlackGreen.png"
          alt="LevRegAi"
          width="200"
        />

        <h1>We&apos;re at capacity right now.<br />That&apos;s a good sign.</h1>

        <p className="waitlist-subhead">
          We work with a small number of clients at a time so we can actually help - not just hand you a login and wish you luck.
          Right now, every spot is taken.
        </p>

        <div className="waitlist-availability-badge">
          Projected availability: <span>~51 days</span>
        </div>

        <div className="waitlist-form-wrapper">
          <p>
            Join the waitlist and we&apos;ll send you details as soon as a spot opens up. Keep a lookout for a heads-up when
            we&apos;re ready for you.
          </p>

          <form
            action="https://app.kit.com/forms/9353611/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="9353611"
            data-uid="124383c38d"
            data-format="inline"
            data-version="5"
            data-options={KIT_FORM_OPTIONS}
          >
            <div data-style="clean">
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input className="formkit-input" aria-label="First Name" name="fields[first_name]" placeholder="First Name" type="text" />
                </div>
                <div className="formkit-field">
                  <input className="formkit-input" aria-label="Last Name" name="fields[last_name]" placeholder="Last Name" type="text" />
                </div>
                <div className="formkit-field">
                  <input className="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email" />
                </div>
                <div className="formkit-field">
                  <input className="formkit-input" aria-label="Phone" name="fields[phone]" placeholder="Phone" type="text" />
                </div>
                <button data-element="submit" className="formkit-submit" type="submit">
                  <div className="formkit-spinner"><div></div><div></div><div></div></div>
                  <span>Join the Waitlist</span>
                </button>
              </div>
            </div>
          </form>

          <p className="waitlist-fine-print">Good things take a little patience.</p>
        </div>

        <p className="waitlist-note">
          We&apos;d rather do this right than do it fast.
        </p>
      </div>
    </div>
  );
};

export default Waitlist;
