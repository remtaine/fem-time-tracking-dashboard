/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontSize: {
      "2xs": ".6rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        fem: {
          100: "hsl(15, 100%, 70%)",
          200: "hsl(195, 74%, 62%)",
          300: "hsl(348, 100%, 68%)",
          400: "hsl(145, 58%, 55%)",
          500: "hsl(264, 64%, 52%)",
          550: "#5746EA",
          575: "#34397B",
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
