import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import SocialLinks from './SocialLinks';

const roles = [
  'Software Developer',
  'Web Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const { isDark } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
        setDisplayText(currentRole.slice(0, charIndex - 1));
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-screen px-[10%] pt-[60px] pb-[100px] gap-4 overflow-hidden"
    >
      {/* Decorative code snippet (left side, desktop only) */}
      <div
        className="absolute left-[3%] top-[30%] hidden lg:block text-left text-xs font-mono leading-relaxed select-none"
        style={{
          color: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(99,102,241,0.12)',
          transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 1s ease 0.8s',
        }}
      >
        <div>{'const developer = {'}</div>
        <div>&nbsp;&nbsp;name: <span style={{ color: isDark ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)' }}>"Anshu"</span>,</div>
        <div>&nbsp;&nbsp;skills: [<span style={{ color: isDark ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)' }}>...</span>],</div>
        <div>&nbsp;&nbsp;passion: <span style={{ color: isDark ? 'rgba(236,72,153,0.3)' : 'rgba(236,72,153,0.2)' }}>∞</span>,</div>
        <div>{'};'}</div>
      </div>

      {/* Decorative terminal (right side, desktop only) */}
      <div
        className="absolute right-[3%] top-[35%] hidden lg:block text-left text-xs font-mono select-none"
        style={{
          color: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(99,102,241,0.12)',
          transform: loaded ? 'translateX(0)' : 'translateX(40px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 1s ease 1s',
        }}
      >
        <div style={{ color: isDark ? 'rgba(139,92,246,0.25)' : 'rgba(139,92,246,0.15)' }}>$ npm run build</div>
        <div style={{ color: isDark ? 'rgba(16,185,129,0.25)' : 'rgba(16,185,129,0.15)' }}>✓ compiled successfully</div>
        <div style={{ color: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(59,130,246,0.12)' }}>$ deploying...</div>
        <div style={{ color: isDark ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.18)' }}>✓ live 🚀</div>
      </div>


      {/* Profile Image with animated ring */}
      <div
        className="relative mt-20 sm:mt-12 md:mt-0"
        style={{
          transform: loaded ? 'scale(1)' : 'scale(0.8)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.3s',
        }}
      >
        {/* Rotating ring */}
        <div
          className="absolute inset-[-6px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            animation: 'spinRing 4s linear infinite',
            padding: '3px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden relative z-10 shadow-lg">
          <img
            src="/anshupp.png"
            alt="Anshu Kushwaha"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Heading */}
      <h1
        className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] m-0 font-heading"
        style={{
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.4s',
        }}
      >
        <span style={{ color: isDark ? '#ffffff' : '#111827' }}>Hi, I'm </span>
        <span className="anshu-logo" style={{ filter: 'none' }}>Anshu Kushwaha</span>
      </h1>

      {/* Status badge */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-display tracking-wider uppercase"
        style={{
          background: isDark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)',
          border: `1px solid ${isDark ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.2)'}`,
          color: '#10b981',
          transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.45s',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for opportunities
      </div>

      {/* Interactive Typing Text */}
      <div
        className="h-10 flex items-center justify-center gap-2"
        style={{
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.5s',
        }}
      >
        <span
          className="px-3 py-1 rounded-md text-xs font-mono"
          style={{
            background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(99,102,241,0.08)',
            color: isDark ? '#60a5fa' : '#6366f1',
            border: `1px solid ${isDark ? 'rgba(59,130,246,0.2)' : 'rgba(99,102,241,0.15)'}`,
          }}
        >
          &gt;_
        </span>
        <span className="text-xl font-display font-semibold tracking-wide" style={{ color: isDark ? '#cbd5e1' : '#6b7280' }}>
          I'm a{' '}
          <span className="text-primary font-bold">
            {displayText}
            <span className="animate-pulse ml-[2px] text-accent">|</span>
          </span>
        </span>
      </div>

      {/* Description */}
      <p
        className="text-lg max-w-[600px] mx-auto leading-relaxed"
        style={{
          color: isDark ? '#94a3b8' : '#6b7280',
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.6s',
        }}
      >
        I enjoy building scalable, efficient applications
        with an emphasis on clean code, performance, and user experience.
      </p>

      {/* Social Links */}
      <div
        style={{
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.7s',
        }}
      >
        <SocialLinks className="mt-2" />
      </div>

      {/* CTA Buttons */}
      <div
        className="flex gap-4 justify-center mt-2 flex-col sm:flex-row w-full max-w-[300px] sm:max-w-none sm:w-auto"
        style={{
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 0.8s',
        }}
      >
        <a
          href="#projects"
          className="group px-8 py-4 rounded-xl no-underline font-semibold font-display transition-all duration-300 text-center tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(59,130,246,0.3)',
          }}
        >
          View My Work
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
        <a
          href="Resume-AnshuKushwaha.pdf"
          className="group px-8 py-4 rounded-xl no-underline font-semibold font-display transition-all duration-300 text-center tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1"
          style={{
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(99,102,241,0.2)'}`,
            color: isDark ? '#e2e8f0' : '#4f46e5',
            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(99,102,241,0.04)',
          }}
          download
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span className="text-xs font-display tracking-widest uppercase" style={{ color: isDark ? '#64748b' : '#9ca3af' }}>
          Scroll
        </span>
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{
            border: `2px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(99,102,241,0.2)'}`,
          }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{
              background: isDark ? '#3b82f6' : '#6366f1',
              animation: 'scrollDot 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
