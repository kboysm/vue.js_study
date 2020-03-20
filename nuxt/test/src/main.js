import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import test from "./plugins/test";
Vue.config.productionTip = false;
// test.foo();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
