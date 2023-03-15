// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'LinkGenius',
      htmlAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#43aee6' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
  ],
  css: [
    '~/assets/css/bootstrap.rtl.min.css',
    '~/assets/css/output.css',
    '~/assets/css/fontiran.css'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  experimental: {
    writeEarlyHints: false
  },
  tailwindcss: {
    viewer: false
  }
})
