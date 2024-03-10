// /** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
