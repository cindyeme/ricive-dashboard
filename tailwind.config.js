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
          200: "#7BC068",
          300: "#5AA645",
          400: "#4E903C",
          500: "#676868",
          600: "#414243",
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
          300: "#414243",
          400: "#667085",
          500: "#344054",
          600: "#101828",
        },
      },
      fontSize: {
        xxs: "0.81rem",
        xs: "0.88rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.25rem",
        xl: "3rem",
        xxl: "4rem",
        extra: "1.25rem",
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
        "custom-1":
          "-4px -4px 2px rgba(232, 232, 232, 0.25), 4px 4px 2px rgba(232, 232, 232, 0.25)",
        "custom-2":
          "0px -3.06122px 7.65306px 7.65306px rgba(0, 0, 0, 0.1), 0px 7.65306px 15.3061px 15.3061px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "320px",
        // => @media (min-width: 320px) { ... }

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1200px",
        // => @media (min-width: 1200px) { ... }

        "3xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "4xl": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
