import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "font-awesome/css/font-awesome.min.css"
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    listEdit(memo,index){
      this.$emit('listEdit',memo,index)
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
