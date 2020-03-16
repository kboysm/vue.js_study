import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import cfg from '../config'
import VueRecaptcha from 'vue-recaptcha'
import LoadScript from 'vue-plugin-load-script';
// import Notifications from 'vue-notification'
import Trend from 'vuetrend'

Vue.config.productionTip = false

Vue.prototype.$cfg = cfg
Vue.use(Trend)
// Vue.use(Notifications)
Vue.use(LoadScript)
//loadScript 를 LoadScript로 쓰면 error 잘못써서 한참 해맸음..
Vue.loadScript("https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit")
  .then(() => {
    Vue.component('vue-recaptcha', VueRecaptcha)
  })
  .catch((e) => {
    console.error(`google api load failed: ${e.message}`)
  })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
