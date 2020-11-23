import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 사용자 지정 디렉티브 테스트
Vue.directive('test-directive', (el, binding) => {
  console.log("test!el : ", el);
  console.log("test!binding : ", binding);
  el.style.backgroundColor = binding.value.color
  el.style.color = binding.value.textColor
}) // v-사용자지정 디렉티브로 인자를 넘겨서 활용가능

// Vue.directive('test-directive', (el) => {
//   el.focus();
// })
// 포커스가 걸리는걸 확인했음 , 전역적 사용 가능
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
