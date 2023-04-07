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
      },
      colors: {
        textColor: "#252B42",
        secondaryTextColor: "#737373",
        primaryColor : 'rgb(37, 43, 66)',
        primaryColorFaded75 : 'rgba(37, 43, 66 , 0.75)',
        primaryColorFaded60 : 'rgba(37, 43, 66 , 0.6)',
        primaryColorFaded50 : 'rgba(37, 43, 66 , 0.5)',
        backgroundColor: "#EDA751",
        backgroundColorFaded : 'rgba( 237 , 167 , 81 , 0.75 )',
        LightGray02 : 'rgba( 0, 0, 0,0.02)',
        LightGray05 : 'rgba( 0, 0, 0,0.05)',
        LightGray1 : 'rgba( 0, 0, 0,0.1)'
      },
    },
  },
  plugins: [],
};
