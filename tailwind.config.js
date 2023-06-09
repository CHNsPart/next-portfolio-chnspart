/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'midlineReg': 'midlineReg',
        'midlineSans': 'midlineSans',
        'moonrisingItalic':'moonrisingItalic',
        'moonrising':'moonrising',
      },
      colors: {
        "Aureolin":"#f3e31a",
        "Cordovan":"#854245",
        "Earth":"#e0ab66",
        "Raisin":"#1a1b21",
        "Poppy":"#cf403d",
        "Cerulean":"#00a3e0",
        "Back":"#E2E2E2"
      },
      fontSize: {
        'reg': '0.875rem',
        'med': '1.2rem',
        'big': '2rem',
      },
      screens:{
        'md': '912px',
      },
      animation: {
        marquee: 'marquee 65s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

