import { useState, useEffect } from 'react';

import SocialLinks from './SocialLinks';
import profileImg from '../assets/anshupp.webp';

const roles = [
  'Software Developer',
  'Web Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

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
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500); // Small pause before typing next word
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-screen px-5 md:px-[10%] pt-[70px] pb-[16px] gap-2 md:gap-3 overflow-hidden"
    >
      {/* Decorative code snippet (left side, desktop only) */}
      <div
        className="absolute left-[3%] top-[30%] hidden lg:block text-left text-xs font-mono leading-relaxed select-none text-blue-500/20 dark:text-blue-500/20 animate-fade-in-left"
        style={{ animationDelay: '0.8s' }}
      >
        <div>{'const developer = {'}</div>
        <div>&nbsp;&nbsp;name: <span className="text-violet-500/25 dark:text-violet-500/30">"Anshu"</span>,</div>
        <div>&nbsp;&nbsp;skills: [<span className="text-blue-500/25 dark:text-blue-500/30">...</span>],</div>
        <div>&nbsp;&nbsp;passion: <span className="text-pink-500/25 dark:text-pink-500/30">∞</span>,</div>
        <div>{'};'}</div>
      </div>

      {/* Decorative terminal (right side, desktop only) */}
      <div
        className="absolute right-[3%] top-[35%] hidden lg:block text-left text-xs font-mono select-none text-blue-500/12 dark:text-blue-500/20 animate-fade-in-right"
        style={{ animationDelay: '1s' }}
      >
        <div className="text-violet-500/15 dark:text-violet-500/25">$ npm run build</div>
        <div className="text-emerald-500/15 dark:text-emerald-500/25">✓ compiled successfully</div>
        <div className="text-blue-500/12 dark:text-blue-500/20">$ deploying...</div>
        <div className="text-emerald-500/18 dark:text-emerald-500/30">✓ live 🚀</div>
      </div>

      {/* Profile Image with animated ring */}
      {/* Profile Image with animated ring */}
      <div
        className="relative mt-2 md:mt-0 lg:-mt-2 shrink-0 flex-none mx-auto w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] animate-scale-in"
        style={{ animationDelay: '0.3s' }}
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
        {/* Profile Image Container */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden z-10 shadow-lg bg-indigo-500/10"
        >
          <img
            src={profileImg}
            alt="Anshu Kushwaha"
            className="w-full h-full object-cover object-top block rounded-full"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>

      {/* Heading */}
      <h1
        className="text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold leading-tight m-0 font-heading animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-gray-900 dark:text-white">Hi, I'm </span>
        <span className="anshu-logo" style={{ filter: 'none' }}>Anshu Kushwaha</span>
      </h1>

      {/* Status badge */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold font-display tracking-wider uppercase text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/30 animate-fade-in-up"
        style={{ animationDelay: '0.45s' }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for opportunities
      </div>

      {/* Interactive Typing Text */}
      <div
        className="flex items-center justify-center gap-2 my-1 animate-fade-in-up"
        style={{ animationDelay: '0.5s' }}
      >
        <span className="px-3 py-1 rounded-md text-xs font-mono bg-blue-500/10 dark:bg-blue-500/10 text-indigo-500 dark:text-blue-400 border border-indigo-500/15 dark:border-blue-500/20">
          &gt;_
        </span>
        <span className="text-xl font-display font-semibold tracking-wide text-gray-600 dark:text-slate-300">
          I'm a{' '}
          <span className="text-primary font-bold">
            {displayText}
            <span className="animate-pulse ml-[2px] text-accent">|</span>
          </span>
        </span>
      </div>

      {/* Description */}
      <p
        className="text-base md:text-lg max-w-[600px] mx-auto leading-snug text-gray-600 dark:text-slate-400 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        I enjoy building scalable, efficient applications
        with an emphasis on clean code, performance, and user experience.
      </p>

      {/* Social Links */}
      <div
        className="scale-90 md:scale-100 origin-center animate-fade-in-up"
        style={{ animationDelay: '0.7s' }}
      >
        <SocialLinks />
      </div>

      {/* CTA Buttons */}
      <div
        className="flex gap-3 justify-center mt-1 flex-col sm:flex-row w-full max-w-[300px] sm:max-w-none sm:w-auto animate-fade-in-up"
        style={{ animationDelay: '0.8s' }}
      >
        <a
          href="#projects"
          className="group px-6 py-3 lg:px-8 lg:py-4 rounded-xl no-underline font-semibold font-display transition-all duration-300 text-center tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1 text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)]"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
        >
          View My Work
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/1Qj65URYx2dhSJEDpI5Nb1ugCQiRtu8k8/view?usp=sharing"
          className="group px-6 py-3 lg:px-8 lg:py-4 rounded-xl no-underline font-semibold font-display transition-all duration-300 text-center tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1 border border-white/15 dark:border-white/15 text-indigo-600 dark:text-slate-200 bg-indigo-500/[0.04] dark:bg-white/[0.03]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 inset-x-0 w-full flex-col items-center gap-1 [@media(max-height:750px)]:hidden flex animate-fade-in-up opacity-50 pointer-events-none"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-[10px] font-display tracking-widest uppercase text-gray-500 dark:text-slate-500">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full flex justify-center pt-1.5 border-2 border-indigo-500/20 dark:border-white/15 relative">
          <div
            className="w-1 h-2 rounded-full bg-indigo-500 dark:bg-blue-400 absolute top-1.5"
            style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>

    </section>
  );
}
