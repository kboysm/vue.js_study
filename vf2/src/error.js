import Vue from 'vue'

Vue.config.errorHandler = e => {
    console.error(e.message)
    Vue.prototype.$toast.error('Default toast')
    console.log("error.js 왔다감")
}
