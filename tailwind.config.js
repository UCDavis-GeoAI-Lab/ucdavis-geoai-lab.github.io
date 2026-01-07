/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ucd-blue': {
          DEFAULT: '#022851',
          light: '#1a4a7a',
          dark: '#011a3a',
        },
        'ucd-gold': {
          DEFAULT: '#FFBF00',
          light: '#FFD633',
          dark: '#CC9900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


