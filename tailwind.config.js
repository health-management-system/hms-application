const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        priCol: "#153243",
        priHover: "#245573",
        secCol: "#ede7dc",
        grayCol: "#BDC3CB",
        baseCol: '#DDE1E4',
        accCol: '#010409'
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
