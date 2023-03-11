/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: [
    'container',
    'container-fluid',
    'row',
    'col-12',
    'navbar',
    'navbar-expand-lg',
    'd-none',
    'd-xxl-block',
    'd-block',
    'd-xxl-none',
    'nav-item',
    'dropdown',
    'dropdown-menu',
    'dropdown-item',
    'collapse'
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
