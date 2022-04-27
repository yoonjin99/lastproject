export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lastproject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // cache: true,

  parallel: true,
  cache: true,
  hardSource: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // 'nuxt-lazy-load',
    // 'nuxt-ssr-cache',
  ],

  buildDir: 'dist',

  // axios: {
  //   baseURL: 'http://localhost:8080', // Used as fallback if no runtime config is provided
  //   proxy: true // Can be also an object with default options
  // },

  // proxy: {
  //   '/api/*': {
  //     target: 'http://localhost:8080',
  //     changeOrigin: false,
  //     prependPath: false
  //   },
  // },

  publicRuntimeConfig: {
    axios: {
      baseURL: 'localhost:8080', // Used as fallback if no runtime config is provided
      proxy: false // Can be also an object with default options
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  target: 'static',

  generate:{
    fallback: true,
  },

  mode:'universal',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr:true,
  }
}
