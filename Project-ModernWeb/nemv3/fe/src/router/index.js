import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/block',
    name: '차단',
    component: () => import('../views/block')
  },
  {
    path: '/header',
    name: '헤더',
    component: () => import('../views/header.vue'),
    beforeEnter: (to, from, next) => {
      // console.log(to)
      // console.log(from)
      if (!localStorage.getItem('token')) return next('block')
      next()
    }
  },
  {
    path: '/sign',
    name: '로그인',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
