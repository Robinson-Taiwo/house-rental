/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sphone': { 'max': '320px' },
      'phone': '320px',
      'tablet': '640px',
      'desktop': '1024px',
      'wide': '1440px',
    },

    extend: {},
  },
  plugins: [],
}