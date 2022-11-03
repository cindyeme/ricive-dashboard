/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: "#12B76A",
        white: "#ffffff",
        primary: {
          50: "#F9FAFB",
          100: "#F3FAF2",
          200: "#8EC97D",
          300: "#7BC068",
          400: "#5AA645",
          500: "#4E903C",
        },
        light: {
          100: "#ECF0FD",
          200: "#DDD8FF",
          300: "#B3B3B4",
          400: "#8d8e8e",
          500: "#676868",
          600: "#414243",
        },
        black: {
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#667085",
          500: "#344054",
          600: "#101828",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      boxShadow: {
        "custom-1": "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
