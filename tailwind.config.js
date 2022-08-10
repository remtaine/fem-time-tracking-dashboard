/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        fem: {
          100: "hsl(15, 100%, 70%)",
          200: "hsl(195, 74%, 62%)",
          300: "hsl(348, 100%, 68%)",
          400: "hsl(145, 58%, 55%)",
          500: "hsl(264, 64%, 52%)",
          600: "hsl(43, 84%, 65%)",
          700: "hsl(226, 43%, 10%)",
          800: "hsl(235, 46%, 20%)",
          900: "hsl(235, 45%, 61%)",
          950: "hsl(236, 100%, 87%)",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
