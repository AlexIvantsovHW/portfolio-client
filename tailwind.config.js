/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "280px",
      xs: "320px",
      xsm: "360px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ...colors,
        pink: "#a855f7",
      },
      keyframes: {
        waveGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        wave: "waveGradient 5s ease infinite",
      },
      fontFamily: {
        revamped: ["Revamped", "sans-serif"],
      },
    },
  },
  plugins: [],
};
