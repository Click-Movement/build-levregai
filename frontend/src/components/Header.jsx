import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/blog' }
  ];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/LevReg_BlackBlue.png"
              alt="LevReg.Ai"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`transition-colors duration-200 text-sm font-medium ${
                  location.pathname === item.href
                    ? 'text-brand-500'
                    : 'text-gray-900 hover:text-brand-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.levreg.ai/scorecard">
              <Button
                className="bg-brand hover:bg-brand-700 text-white transition-colors duration-200"
              >
                Start Here
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-200 py-2 ${
                    location.pathname === item.href
                      ? 'text-brand-500'
                      : 'text-gray-900 hover:text-brand-500'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              <a href="https://www.levreg.ai/scorecard" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="bg-brand hover:bg-brand-700 text-white w-full mt-2"
                >
                  Start Here
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
