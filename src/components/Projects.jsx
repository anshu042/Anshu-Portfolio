import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const projects = [
  {
    title: 'Real-Time E-Commerce Products Price Monitor',
    description:
      'A full-stack automated scraping solution designed to track e-commerce product prices and availability in real-time. Users can track specific products, visualize price history trends, and receive automated email alerts when price drops occur.',
    tech: ['Next.js 14', 'Supabase', 'Cron Jobs', 'Firecrawl API', 'Tailwind CSS', 'Vercel'],
    demo: 'https://shopalert.vercel.app/',
    code: 'https://github.com/anshu042/real-time-price-monitor.git',
    color: '#3b82f6',
    icon: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z',
  },
  {
    title: 'Multi-User Chat Room Application',
    description:
      'A secure, real-time messaging platform with a modern "Dark Glass" UI, robust user authentication, persistent cloud storage for chat history, and private rooms for seamless communication.',
    tech: ['Python', 'Flask', 'Socket.IO', 'Firebase', 'HTML/CSS', 'JavaScript'],
    demo: 'https://chattingroomapp.vercel.app/',
    code: 'https://github.com/anshu042/multi-user-chat-room.git',
    color: '#8b5cf6',
    icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
  },
  {
    title: 'Scorify - Academic Score Converter',
    description:
      'A comprehensive Flask-based utility that streamlines score conversions between CGPA, SGPA, and Percentage with Mumbai University algorithms and instant PDF report generation.',
    tech: ['Python', 'Flask', 'ReportLab', 'HTML/CSS', 'JavaScript', 'Vercel'],
    demo: 'https://scorifyy.vercel.app/',
    code: 'https://github.com/anshu042/academic-score-calculator.git',
    color: '#10b981',
    icon: 'M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM6.51 18.99l11-14 1.42 1.42-11 14z',
  },
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function ProjectCard({ project, isDark, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-500 flex flex-col group"
      style={{
        background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
        border: `1px solid ${isHovered
          ? project.color
          : isDark ? 'rgba(59,130,246,0.2)' : '#e5e7eb'}`,
        boxShadow: isHovered
          ? `0 20px 40px rgba(${hexToRgb(project.color)}, ${isDark ? 0.3 : 0.15}), 0 0 30px rgba(${hexToRgb(project.color)}, ${isDark ? 0.15 : 0.05})`
          : isDark ? '0 0 20px rgba(59,130,246,0.08)' : '0 4px 15px rgba(0,0,0,0.08)',
        backdropFilter: isDark ? 'blur(10px)' : 'none',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Color accent bar at top */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
          opacity: isHovered ? 1 : 0.5,
        }}
      />

      <div className="p-8 flex flex-col flex-1">
        {/* Project Icon + Number */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: isDark
                ? `rgba(${hexToRgb(project.color)}, 0.15)`
                : `rgba(${hexToRgb(project.color)}, 0.08)`,
              transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: project.color }}>
              <path d={project.icon} />
            </svg>
          </div>
          <span
            className="text-4xl font-extrabold font-heading select-none"
            style={{
              color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-3 font-heading leading-tight"
          style={{ color: isDark ? '#ffffff' : '#111827' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5 text-justify flex-1"
          style={{ color: isDark ? '#94a3b8' : '#6b7280' }}
        >
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold font-display transition-all duration-200 hover:scale-105"
              style={{
                background: isDark
                  ? `rgba(${hexToRgb(project.color)}, 0.1)`
                  : `rgba(${hexToRgb(project.color)}, 0.06)`,
                border: `1px solid ${isDark
                  ? `rgba(${hexToRgb(project.color)}, 0.3)`
                  : `rgba(${hexToRgb(project.color)}, 0.2)`}`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl no-underline text-sm font-bold font-display transition-all duration-300 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              color: '#ffffff',
              boxShadow: `0 4px 15px rgba(${hexToRgb(project.color)}, 0.3)`,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.code}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl no-underline text-sm font-bold font-display transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : '#e5e7eb'}`,
              color: isDark ? '#e2e8f0' : '#374151',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="px-[10%] py-[100px]">
      <h2
        className="text-center text-[2.5rem] font-bold mb-4 font-heading"
        style={{ color: isDark ? '#ffffff' : '#111827' }}
      >
        My Projects
      </h2>
      <p
        className="text-center text-lg mb-14 max-w-2xl mx-auto"
        style={{ color: isDark ? '#94a3b8' : '#6b7280' }}
      >
        Here are some of my recent works that showcase my skills
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isDark={isDark} index={index} />
        ))}
      </div>
    </section>
  );
}
