import Vue from 'vue'
Vue.config.errorHandler = e => {
    // console.log('main js errorhandler')
    // console.error(e.message)
    Vue.prototype.$toasted.global.error(e.message)
}
