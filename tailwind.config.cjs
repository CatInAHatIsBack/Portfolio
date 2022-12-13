/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#00141f",
        // primary: "#ff901f",
        // primary: "#ff2975",
        // primary: "#f222ff",
        // primary: "#8c1eff",
        // primary: "#C724B1",
        // primary: "#642F6C",
        primary: "#3A3A59",
        
        // secondary: "#00f6ff",
        secondary: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
        // dimBlue: "#642F6C",
        // dimBlue: "#b330c7",
        dimBlue: "#a666b0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};