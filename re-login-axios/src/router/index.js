import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Mypage from '../views/Mypage.vue'
import store from '../store/index'
Vue.use(VueRouter)

const rejectAuthUser=(to,from,next)=>{
  if(store.state.isLogin === true){

    next('/')
  }else{
    next()
  }
}
const onlyAuthUser=(to,from,next)=>{
  if(store.state.isLogin === false){

    next('/login')
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter:rejectAuthUser,
    component: Login
  },
  {
    path: '/mypage',
    name: 'mypage',
    beforeEnter:onlyAuthUser,
    component: Mypage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
