import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about', internal: true },
      { label: 'Services', href: '/services', internal: true },
      { label: 'Contact', href: '/discovery', internal: true }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy', internal: true },
      { label: 'Terms of Service', href: '/terms-of-service', internal: true },
      { label: 'Cookie Policy', href: '/cookie-policy', internal: true }
    ]
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img 
              src="/LevReg_WhiteGreen.png"
              alt="LevReg.Ai" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              LevReg.Ai helps small businesses become AI-first by training employees to use role-specific AI systems for speed, accuracy, and efficiency.
            </p>
            <p className="text-brand-400 text-sm font-semibold mt-4">
              Your team. Amplified by AI.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LevReg.Ai. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/levregai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/levregai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/levregai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/levregai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
