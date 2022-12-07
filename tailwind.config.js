/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      height: {
        '280': '280px',
        '500': '500px'
      },
      left: {
        '32': '32px'
      },
      right: {
        '32': '32px'
      },
      

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    [require("daisyui")]
  ],
}
