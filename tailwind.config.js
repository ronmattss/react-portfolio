/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'white': '#ffffff',
        'custom-dark-primary': '#222831',
        'custom-dark-secondary': '#393E46',
        'custom-navy-sky': '#EEEEEE',
        'custom-navy-accent': '#00ADB5',
      }
    },
  },
  plugins: [],
}