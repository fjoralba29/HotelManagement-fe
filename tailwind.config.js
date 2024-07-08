/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'rgb(235, 165, 80)', // example color
        },
        secondary: {
          500: '#464A53', // example color
        },
      },
      gridTemplateAreas: {
        formcard: ['image content action'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
