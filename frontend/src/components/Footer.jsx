import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' }
    ]
  };

  return (
    <footer className={isDark ? 'bg-[#0a0a0a] border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img 
              src={isDark 
                ? "https://customer-assets.emergentagent.com/job_7e29061e-ffd5-4596-a601-775e365ccb93/artifacts/eiumndvy_LevRegWhiteBlue_Logo.png"
                : "https://customer-assets.emergentagent.com/job_levreg-marketing/artifacts/rcnyj81p_LevRegBlackBlue_Logo.png"
              }
              alt="LevReg.Ai" 
              className="h-10 w-auto mb-4"
            />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed max-w-md`}>
              LevReg.Ai helps small businesses become AI-first by training employees to use role-specific AI systems for speed, accuracy, and efficiency.
            </p>
            <p className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-sm font-semibold mt-4`}>
              Your team. Amplified by AI.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-black'} font-semibold mb-4`}>Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-sm`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-black'} font-semibold mb-4`}>Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 text-sm`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className="text-gray-500 text-sm">
            © {currentYear} LevReg.AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`}
              aria-label="Twitter"
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
