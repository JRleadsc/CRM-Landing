/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./login.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        iran: ['IRANSans']
      }
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
