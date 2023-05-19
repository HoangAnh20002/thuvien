/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:['"Barlow Condensed"','sans-serif']
      },
      colors:{
        primary:'#16405B'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("tw-elements/dist/plugin.cjs"),
  ],
}

