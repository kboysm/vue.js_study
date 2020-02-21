import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const Users =()=>import('./views/Users')


export default new Router({
  mode: 'history',
  //mode: 'history 가 있어서 주소창에 #가 생기지 않는다.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users',
      //path 경로에 /:id등으로 전달하는 방법과 router 객체에 데이터를 담아서 $route.params로 받을 수 있다.
      name: 'users',
      component: Users
    }
  ]
})
