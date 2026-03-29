import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  // Shrink navbar on scroll + track active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accentBlue = isDark ? '#3b82f6' : '#6366f1';
  const accentViolet = isDark ? '#8b5cf6' : '#818cf8';

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[1000] px-5 md:px-[10%] flex justify-between items-center transition-all duration-400 border-b"
        style={{
          paddingTop: scrolled ? '12px' : '20px',
          paddingBottom: scrolled ? '12px' : '20px',
          backgroundImage: isDark
            ? 'linear-gradient(90deg, #020617, #0f172a, #1e1b4b)'
            : 'linear-gradient(90deg, #e0e7ff, #ede9fe, #e0e7ff)',
          borderColor: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(139,92,246,0.1)',
          boxShadow: scrolled
            ? isDark
              ? '0 8px 32px rgba(0,0,0,0.5)'
              : '0 8px 32px rgba(99,102,241,0.12)'
            : 'none',
        }}
      >
        {/* Circuit board pattern */}
        <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: isDark ? 0.08 : 0.06 }}>
          <defs>
            <linearGradient id="navPulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={accentBlue} stopOpacity="0" />
              <stop offset="50%" stopColor={accentBlue} stopOpacity="1" />
              <stop offset="100%" stopColor={accentViolet} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal traces */}
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke={accentBlue} strokeWidth="0.5" strokeDasharray="12 8" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke={accentViolet} strokeWidth="0.5" strokeDasharray="8 12" />
          {/* Circuit nodes */}
          <circle cx="15%" cy="30%" r="2" fill={accentBlue} />
          <circle cx="40%" cy="70%" r="2" fill={accentViolet} />
          <circle cx="65%" cy="30%" r="2" fill={accentBlue} />
          <circle cx="85%" cy="70%" r="1.5" fill={accentViolet} />
          {/* Vertical connectors */}
          <line x1="15%" y1="30%" x2="15%" y2="70%" stroke={accentBlue} strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="65%" y1="30%" x2="65%" y2="70%" stroke={accentViolet} strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>
        {/* Energy pulse sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, ${isDark ? 'rgba(59,130,246,0.07)' : 'rgba(99,102,241,0.05)'} 45%, ${isDark ? 'rgba(139,92,246,0.07)' : 'rgba(139,92,246,0.04)'} 55%, transparent 100%)`,
            backgroundSize: '300% 100%',
            animation: 'navScan 8s ease-in-out infinite',
          }}
        />
        {/* Logo */}
        <a href="#home" className="no-underline" aria-label="Home">
          <div
            className="anshu-logo font-extrabold font-heading transition-all duration-300 cursor-pointer select-none hover:scale-[1.08] hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]"
            style={{
              fontSize: scrolled ? '1.3rem' : '1.6rem',
              letterSpacing: '0.2em',
            }}
          >
            {'ANSHU'.split('').map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-200 hover:-translate-y-[3px]"
              >
                {letter}
              </span>
            ))}
          </div>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop Navigation */}
          <ul className="list-none hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`no-underline font-semibold text-sm tracking-wide transition-all duration-300 px-4 py-2 rounded-full relative ${
                      isActive
                        ? 'text-white shadow-[0_2px_12px_rgba(59,130,246,0.4)]'
                        : 'text-gray-600 dark:text-slate-200 hover:text-primary hover:bg-blue-500/10 dark:hover:bg-blue-500/10'
                    }`}
                    style={
                      isActive
                        ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }
                        : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer border group relative overflow-hidden bg-white/[0.08] dark:bg-white/[0.08] border-indigo-500/15 dark:border-white/10"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            id="theme-toggle-btn"
          >
            <div
              className="transition-all duration-500"
              style={{ transform: isDark ? 'rotate(0deg)' : 'rotate(360deg)' }}
            >
              {isDark ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-yellow-400">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-indigo-600">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              )}
            </div>
          </button>

          {/* Animated mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-transparent border-none relative z-[1001]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-700 dark:bg-white ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-700 dark:bg-white ${isOpen ? 'opacity-0 translate-x-3' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-700 dark:bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="absolute top-full left-0 w-full md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: isOpen ? '400px' : '0',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <ul
            className="list-none flex flex-col p-6 gap-2 border-b"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(180deg, #0f172a, #1e1b4b)'
                : 'linear-gradient(180deg, #ede9fe, #e0e7ff)',
              borderColor: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(139,92,246,0.15)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`no-underline font-semibold text-base block py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-700 dark:text-slate-200'
                    }`}
                    style={
                      isActive
                        ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }
                        : undefined
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Animated gradient line under navbar */}
      <div
        className="fixed z-[999] left-0 w-full h-[2px]"
        style={{
          top: scrolled ? '52px' : '68px',
          backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          backgroundSize: '200% 100%',
          animation: 'gradientSlide 3s linear infinite',
          transition: 'top 0.4s ease',
        }}
      />

    </>
  );
}
