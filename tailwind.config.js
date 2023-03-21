/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        red: {
          1000: '#e84f3e',
        },
      }
    },
  },
  plugins: [],
}
