/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "490px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1536px",
    },
    extend: {
      colors: {
        main:"#050614",
        gradientOne:"#000",
        gradientTwo:"#0A232F",
        textOne:"#fff",
        textTwo:"#03987D",
        textThree: "#C5C5C5",

        bgFirst:"#fff",
        bgSecond:"#10002b",
        hvFirst:"rgb(229 231 235 / var(--tw-bg-opacity))",
        hvSecond:"#3c096c",
        txFirst:"#fff",
        txSecond:"#10002b",
        txThird :"#000",
        dkBgFirst: "#000ff0",

      },
    },
  },
  plugins: [],
};
