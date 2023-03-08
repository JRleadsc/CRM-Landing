/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: [
    'container',
    'container-fluid'
  ],
  theme: {
    extend: {
      fontFamily: {
        iran: ['IRANSans']
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
    require('@formkit/themes/tailwindcss')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3E369D',
          secondary: '#EC4EAE',
          accent: '#43AEE6',
          'accent-content': '#ffffff',
          neutral: '#2C2D2E',

          '--rounded-btn': '5rem' // border radius rounded-btn utility class, used in buttons and similar element
        }
      }
    ],
    rtl: true
  }
}
