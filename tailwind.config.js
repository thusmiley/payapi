/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPink: "#ba4270",
        linkWhite: "#fbfcfe",
        darkBlue: "#36536b",
        lightBlue: "#6c8294",
        charmPink: "#da6d97",
        navy: "#1b262f",
      },
      spacing: { container: "var(--container-w)" },
      cx: "calc((100% - var(--container-w)) / 2)",
    },
    screens: {
      ss: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      body: ["Public Sans", "sans serif"],
      heading: ["DM Serif Display", "serif"],
    },
  },
  plugins: [],
};

