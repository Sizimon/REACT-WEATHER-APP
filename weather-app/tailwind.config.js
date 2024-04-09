/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neonTilt: ['"Tilt Neon"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

