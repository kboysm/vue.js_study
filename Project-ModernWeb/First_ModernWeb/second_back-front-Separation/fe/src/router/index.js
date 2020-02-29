import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sign from '../views/sign.vue'
import Header from '../views/header.vue'
import Block from '../views/block.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lv0',
    component: () => import('../views/lv0')
  },
  {
    path: '/lv1',
    name: 'lv1',
    component: () => import('../views/lv1')
  },
  {
    path: '/lv2',
    name: 'lv2',
    component: () => import('../views/lv2')
  },
  {
    path: '/lv3',
    name: 'lv3',
    component: () => import('../views/lv3')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign',
    name: '로그인',
    component: Sign
  },
  {
    path: '/header',
    name: '헤더',
    component: Header,
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) return next('block')
      next()
    }
  },
  {
    path: '/page',
    name: '페이지',
    component: () => import('../views/page')
  },   
  {
    path: '/block',
    name: '차단',
    component: Block
  },
  {
    path: '/user',
    name: '사용자',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
