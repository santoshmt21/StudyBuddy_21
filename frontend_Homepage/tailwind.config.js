/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ai-iro (藍色) — Indigo Blue palette centered on #165E83
        // 50 (lightest) -> 900 (darkest)
        blue: {
          50:  '#f3f9fb',
          100: '#e6f3f8',
          200: '#bfdfe9',
          300: '#99cbd9',
          400: '#4fa9c2',
          500: '#165E83', // Ai-iro (base)
          600: '#134f6a',
          700: '#0f3f51',
          800: '#0b2f38',
          900: '#071f20',
        }
      }
    },
  },
  plugins: [],
}
