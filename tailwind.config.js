/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f0',
          100: '#ffe4e0',
          200: '#fecdc6',
          300: '#fda998',
          400: '#ff6b4a',
          500: '#ff4d1f',
          600: '#ff3d0f',
          700: '#cc2602',
          800: '#a62408',
          900: '#88230c',
        }
      }
    },
  },
  plugins: [],
}
