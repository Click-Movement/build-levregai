import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

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
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/blog' },
    { label: 'Services', href: '/services' }
  ];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800/50' 
            : 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isDark 
                ? "https://customer-assets.emergentagent.com/job_7e29061e-ffd5-4596-a601-775e365ccb93/artifacts/eiumndvy_LevRegWhiteBlue_Logo.png"
                : "https://customer-assets.emergentagent.com/job_levreg-marketing/artifacts/rcnyj81p_LevRegBlackBlue_Logo.png"
              }
              alt="LevReg.Ai" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-200 text-sm font-medium ${
                  location.pathname === item.href ? (isDark ? 'text-blue-400' : 'text-blue-600') : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/transformation-call">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark 
                  ? 'text-gray-300' 
                  : 'text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={`p-2 ${isDark ? 'text-white' : 'text-black'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'} pt-4`}>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-200 py-2 ${
                    location.pathname === item.href ? (isDark ? 'text-blue-400' : 'text-blue-600') : ''
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/transformation-call" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
                >
                  Learn More
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
