/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-forwards': 'bounce  1s linear forwards',
      },
      fontFamily: {
        sans: ['Saira', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

