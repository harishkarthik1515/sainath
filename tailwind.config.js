/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'game-purple': {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
        },
        'game-black': {
          DEFAULT: '#0f0f0f',
          light: '#1a1a1a',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 0.8) 80%, rgba(15, 15, 15, 1) 100%)',
      },
    },
  },
  plugins: [],
};