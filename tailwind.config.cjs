/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '1px 1px 10px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}