import React from 'react';

// Canonical contact address — see redesign plan "Wire-up items".
const CONTACT_EMAIL = 'team@levregai.com';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lr2 site-footer">
      <div className="foot-grid">
        <div>
          <img
            src="/LevReg_BlackBlue.png"
            alt="LevReg.AI"
            style={{ height: '24px', marginBottom: '14px' }}
          />
          <div style={{ maxWidth: '36ch', lineHeight: 1.55 }}>
            We install an AI workforce inside real operating businesses. Audited, owned, and operated by the people on your team.
          </div>
        </div>

        <div>
          <h5>Method</h5>
          <ul>
            <li><a href="/#method">AI Audit</a></li>
            <li><a href="/#method">Development</a></li>
            <li><a href="/#operators">Fractional Specialists</a></li>
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="/#manifesto">Approach</a></li>
            <li><a href="/#proof">Case studies</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5>Talk</h5>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href="/book-call">Book a discovery call</a></li>
            <li><a href="/book-call">Press &amp; speaking</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© {currentYear} LevReg.AI · All rights reserved</span>
        <span>Powered by Optimized Assets</span>
      </div>
    </footer>
  );
};

export default Footer;
