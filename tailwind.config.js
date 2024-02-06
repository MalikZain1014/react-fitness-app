/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2525ff",
        secondary: "#00a700",
      },
      screens: {
        "-sm": "450px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar")({ nocompatible: true }),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
  ],
};
