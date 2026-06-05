import React, { useState, useEffect } from 'react';

// Homepage section anchors — absolute so they resolve from any route.
const NAV_LINKS = [
  { label: 'Method', href: '/#method' },
  { label: 'Specialists', href: '/#operators' },
  { label: 'Proof', href: '/#proof' },
  { label: 'Approach', href: '/#manifesto' },
  { label: 'FAQ', href: '/#faq' },
];

// CTA destinations.
const DISCOVERY_URL = '/book-call';
const NEWSLETTER_URL = '/newsletter';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="lr2 nav">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="LevReg.AI home">
          <img src="/LevReg_BlackBlue.png" alt="LevReg.AI" className="brand-logo" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button
          className="nav-burger"
          id="nav-burger"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="burger-bar" aria-hidden="true"></span>
          <span className="burger-bar" aria-hidden="true"></span>
        </button>

        <div className="nav-cta">
          <a href={DISCOVERY_URL} className="btn">Discovery Call</a>
          <a href={NEWSLETTER_URL} className="btn btn-primary">FREE NEWSLETTER ↗</a>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="mobile-menu-links" aria-label="Mobile">
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>
        <div className="mobile-menu-cta">
          <a href={DISCOVERY_URL} className="btn btn-lg" onClick={closeMenu}>BOOK A DISCOVERY CALL</a>
          <a href={NEWSLETTER_URL} className="btn btn-primary btn-lg" onClick={closeMenu}>FREE NEWSLETTER ↗</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
