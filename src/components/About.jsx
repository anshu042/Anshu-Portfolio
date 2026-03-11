import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

const skillCategories = [
  {
    category: 'Languages',
    icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    skills: [
      { name: 'Java', color: '#f89820' },
      { name: 'Python', color: '#3776ab' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'PHP', color: '#777bb4' },
    ],
  },
  {
    category: 'Frontend',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    skills: [
      { name: 'HTML5', color: '#e34c26' },
      { name: 'CSS3', color: '#1572b6' },
      { name: 'React.js', color: '#61dafb' },
      { name: 'Tailwind', color: '#06b6d4' },
    ],
  },
  {
    category: 'Backend & DB',
    icon: 'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
    skills: [
      { name: 'MySQL', color: '#4479a1' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Flask', color: '#10b981' },
      { name: 'Firebase', color: '#ffca28' },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    skills: [
      { name: 'Git', color: '#f05032' },
      { name: 'GitHub', color: '#8b5cf6' },
      { name: 'AWS', color: '#ff9900' },
      { name: 'Figma', color: '#f24e1e' },
    ],
  },
];

const expertise = [
  {
    icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    title: 'Web Development',
    desc: 'Building responsive, modern web apps with React, Tailwind, and Node.js',
  },
  {
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    title: 'Problem Solving',
    desc: 'Strong analytical skills with a focus on efficient, scalable solutions',
  },
  {
    icon: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
    title: 'Cloud & DevOps',
    desc: 'Experience with AWS, Git, CI/CD pipelines and deployment workflows',
  },
  {
    icon: 'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z',
    title: 'Data Analysis',
    desc: 'Extracting insights from data using visualization and analytical tools',
  },
];

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies' },
  { value: '2+', label: 'Years Learning' },
  { value: '100%', label: 'Passion' },
];

// Helper: convert hex color to r,g,b string
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function About() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabBtnStyle = (isActive) => ({
    background: isActive
      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
      : isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6',
    color: isActive ? '#ffffff' : isDark ? '#cbd5e1' : '#6b7280',
    border: isActive ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e5e7eb'}`,
  });

  const cardBase = {
    background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
    border: `1px solid ${isDark ? 'rgba(59,130,246,0.3)' : '#e5e7eb'}`,
    boxShadow: isDark ? '0 0 20px rgba(59,130,246,0.1)' : '0 4px 15px rgba(0,0,0,0.08)',
    backdropFilter: isDark ? 'blur(10px)' : 'none',
  };

  return (
    <section id="about" className="px-[10%] py-[100px]" ref={sectionRef}>
      <h2
        className="text-center text-[2.5rem] font-bold mb-4 font-heading"
        style={{ color: isDark ? '#ffffff' : '#111827' }}
      >
        About Me
      </h2>
      <p
        className="text-center text-lg mb-12 max-w-2xl mx-auto"
        style={{ color: isDark ? '#94a3b8' : '#6b7280' }}
      >
        A passionate developer who loves turning ideas into reality
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
              border: `1px solid ${isDark ? 'rgba(59,130,246,0.3)' : '#e5e7eb'}`,
              boxShadow: isDark ? '0 0 15px rgba(59,130,246,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
              backdropFilter: isDark ? 'blur(10px)' : 'none',
            }}
          >
            <div className="text-3xl font-extrabold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              {stat.value}
            </div>
            <div className="text-sm mt-1 font-medium" style={{ color: isDark ? '#94a3b8' : '#6b7280' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg leading-relaxed mb-6 text-justify" style={{ color: isDark ? '#cbd5e1' : '#4b5563' }}>
          I am a dedicated software developer with a strong interest in building reliable,
          scalable, and user-focused applications. I enjoy working across different layers
          of development, combining logical problem-solving with clean and maintainable
          code to deliver effective digital solutions.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-3 mb-10">
        {['skills', 'expertise'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 font-display tracking-wide capitalize"
            style={tabBtnStyle(activeTab === tab)}
          >
            {tab === 'skills' ? '⚡ Technical Skills' : '🎯 Core Expertise'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'skills' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                style={cardBase}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: isDark ? 'rgba(59,130,246,0.15)' : '#eff6ff' }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary">
                      <path d={cat.icon} />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold font-heading" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                    {cat.category}
                  </h4>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-lg text-sm font-semibold font-display transition-all duration-300 cursor-default hover:scale-105"
                      style={{
                        background: isDark
                          ? `rgba(${hexToRgb(skill.color)}, 0.12)`
                          : `rgba(${hexToRgb(skill.color)}, 0.08)`,
                        border: `1px solid ${isDark
                          ? `rgba(${hexToRgb(skill.color)}, 0.4)`
                          : `rgba(${hexToRgb(skill.color)}, 0.25)`}`,
                        color: skill.color,
                        boxShadow: isDark ? `0 0 10px rgba(${hexToRgb(skill.color)}, 0.15)` : 'none',
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 group cursor-default"
                style={cardBase}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: isDark ? 'rgba(59,130,246,0.15)' : '#eff6ff' }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 font-heading" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: isDark ? '#94a3b8' : '#6b7280' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
