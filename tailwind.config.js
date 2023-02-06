/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        lighter: "#1E1E1E",
        darkGrey: "#AAAAAA",
        grey: "#E1E1E1",
        primary: "#00DAC6",
        yellow: "#CEC718",
        red: "#D7654C",
      }
    },
  },
  plugins: [],
}
