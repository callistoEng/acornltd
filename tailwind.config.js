/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "acorn-theme-blue": "#1E3888",
        "fb-color": "#3b5998",
        "twitter-blue": "#1da1f2",
        "acorn-theme-bg": "#2f2f2f",
        "acorn-theme-gold": "#FA8128",
        "acorn-theme-red": "#E2062C",
        "acorn-theme-grad": "#107BF1",
      },
      fontFamily: {
        nuno: ["Montserrat", "Nunito", "sans-serif"],
      },
      zIndex: {
        1010: "1010",
        1020: "1020",
        1030: "1030",
        70: "70",
        80: "80",
      },
      screens: {
        "base": "300px",
        "xl": "958px",
        "base-l": "340px",
        "xs": "400px", 
        "xs-auth-log": "450px",
        "xs-l": "500px",
        "xs-auth": "525px",
        "sm-2": "690px",
        "md-xl": "1000px",
        "md-xls": "870px",
      },
      fontSize: {
        "xxs": ".75rem",
        "xxsxs": ".5rem",
        "xxs-l": ".85rem",
        "xxs-s": ".65rem",
      },
    },
  },
  plugins: [],
}
