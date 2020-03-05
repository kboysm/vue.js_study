const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()
module.exports = {
  router: {
    middleware: 'auth'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?render=6Led194UAAAAAEW_X6PaPXmknQQIai94Ht-U8hUq' // 왜 추가해야할까..
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/firebase','@/plugins/etc'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios','@nuxtjs/recaptcha'
  ],
  //리캡챠의 옵션이 드감
  recaptcha:{
    hideBadge: true,
    siteKey: '',

    version: 3,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  //프론트에서 쓸 것들을 여기서 정의하면 사용가능 , dbUrl 로 프론트에서 호출하면 됌
  env:{
    dbUrl:process.env.LSM_DB_URL,
    FIREBASE_APIKEY:process.env.FIREBASE_APIKEY,
    FIREBASE_PID:process.env.FIREBASE_PID,
    FIREBASE_URL:process.env.FIREBASE_URL
  },
  generate:{
    dir:'public'
  },

}
