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
    },
  },
  plugins: [],
}
