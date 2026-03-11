import { useTheme } from '../ThemeContext';

export default function TechBackground() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)'
            : 'radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Circuit-like lines (light mode prominent) */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isDark ? 0.04 : 0.06 }}>
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke={isDark ? '#3b82f6' : '#6366f1'} strokeWidth="0.5" strokeDasharray="8 16" />
        <line x1="30%" y1="0" x2="30%" y2="100%" stroke={isDark ? '#8b5cf6' : '#818cf8'} strokeWidth="0.5" strokeDasharray="4 20" />
        <line x1="70%" y1="0" x2="70%" y2="100%" stroke={isDark ? '#3b82f6' : '#6366f1'} strokeWidth="0.5" strokeDasharray="6 18" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke={isDark ? '#8b5cf6' : '#818cf8'} strokeWidth="0.5" strokeDasharray="10 14" />
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke={isDark ? '#3b82f6' : '#6366f1'} strokeWidth="0.5" strokeDasharray="12 20" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke={isDark ? '#8b5cf6' : '#818cf8'} strokeWidth="0.5" strokeDasharray="8 24" />
      </svg>

      {/* Glowing orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          top: '-15%',
          right: '-10%',
          background: isDark
            ? 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          animation: 'float1 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          bottom: '5%',
          left: '-10%',
          background: isDark
            ? 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          animation: 'float2 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          top: '35%',
          left: '45%',
          background: isDark
            ? 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
          animation: 'float3 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '350px',
          height: '350px',
          top: '60%',
          right: '20%',
          background: isDark
            ? 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
          animation: 'float1 22s ease-in-out infinite reverse',
        }}
      />

      {/* Floating tech icons */}
      <svg className="absolute" style={{ top: '12%', left: '6%', opacity: isDark ? 0.06 : 0.07, animation: 'float1 12s ease-in-out infinite' }} width="60" height="60" viewBox="0 0 24 24" fill={isDark ? '#3b82f6' : '#6366f1'}>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
      <svg className="absolute" style={{ top: '55%', right: '8%', opacity: isDark ? 0.06 : 0.07, animation: 'float2 14s ease-in-out infinite' }} width="50" height="50" viewBox="0 0 24 24" fill={isDark ? '#8b5cf6' : '#818cf8'}>
        <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
      <svg className="absolute" style={{ bottom: '15%', left: '12%', opacity: isDark ? 0.06 : 0.07, animation: 'float3 16s ease-in-out infinite' }} width="45" height="45" viewBox="0 0 24 24" fill={isDark ? '#3b82f6' : '#6366f1'}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
      {/* Terminal icon */}
      <svg className="absolute" style={{ top: '35%', right: '5%', opacity: isDark ? 0.05 : 0.06, animation: 'float2 18s ease-in-out infinite' }} width="55" height="55" viewBox="0 0 24 24" fill={isDark ? '#8b5cf6' : '#a78bfa'}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-7-2h5v-2h-5v2zM7.5 17l1.41-1.41L6.33 13l2.58-2.59L7.5 9l-4 4 4 4z"/>
      </svg>
      {/* Gear icon */}
      <svg className="absolute" style={{ top: '80%', left: '40%', opacity: isDark ? 0.04 : 0.05, animation: 'spinSlow 30s linear infinite' }} width="40" height="40" viewBox="0 0 24 24" fill={isDark ? '#3b82f6' : '#818cf8'}>
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>

      {/* Animated scan lines */}
      <div
        className="absolute"
        style={{
          top: '25%',
          right: '0',
          width: '200px',
          height: '1px',
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
          animation: 'scanline 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '30%',
          left: '0',
          width: '250px',
          height: '1px',
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)',
          animation: 'scanline 5s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '60%',
          right: '10%',
          width: '180px',
          height: '1px',
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(6,182,212,0.15), transparent)',
          animation: 'scanline 6s ease-in-out infinite',
        }}
      />

      {/* Particle dots (light mode enhancement) */}
      {!isDark && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                top: `${10 + i * 11}%`,
                left: `${5 + (i * 13) % 90}%`,
                background: i % 2 === 0 ? '#818cf8' : '#a78bfa',
                opacity: 0.2,
                animation: `float${(i % 3) + 1} ${12 + i * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </>
      )}

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(2deg); }
          66% { transform: translate(-15px, 15px) rotate(-1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(-2deg); }
          66% { transform: translate(20px, -20px) rotate(1deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -25px); }
        }
        @keyframes scanline {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
