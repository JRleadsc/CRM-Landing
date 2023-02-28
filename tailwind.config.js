/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./login.html"],
  theme: {
    extend: {
      neutral: '#2C2D2E',
      light: '#9EA8B2',
      primary: '#3E369D',
      secondary: '#EC4EAE',
      accent: '#43AEE6'
    },
    fontFamily: {
      iran: ['IRANSans']
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: false,
    rtl: true
  }
}
