/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        accent: '#8b5cf6',
        'dark-bg': '#0f172a',
        'card-bg': 'rgba(30, 41, 59, 0.7)',
        'text-main': '#f8fafc',
        'text-dim': '#94a3b8',
        'border-custom': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in-down': 'fade-in-down 0.6s ease-out both',
        'fade-in-left': 'fade-in-left 1s ease-out both',
        'fade-in-right': 'fade-in-right 1s ease-out both',
        'scale-in': 'scale-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
