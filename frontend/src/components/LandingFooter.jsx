import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Contact Us', href: '/discovery' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/company/levregai/', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://www.facebook.com/levregai', label: 'Facebook', Icon: Facebook },
    { href: 'https://www.instagram.com/levregai/', label: 'Instagram', Icon: Instagram },
    { href: 'https://x.com/levregai', label: 'X (Twitter)', Icon: Twitter },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {currentYear} LevReg.Ai. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {links.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
