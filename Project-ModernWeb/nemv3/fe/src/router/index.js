import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
Vue.use(VueRouter)
Vue.prototype.$axios = axios
const apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/' : '/api/'
Vue.prototype.$apiRootPath = apiRootPath

const pageCheck = (to, from, next) => {
  // return next()
  axios.post(`${apiRootPath}page`, { name: to.path.replace('/', '') }, { headers: { Authorization: localStorage.getItem('token') } })
    .then((r) => {
      if (!r.data.success) throw new Error(r.data.msg)
      next()
    })
    .catch((e) => {
      // console.error(e.message)
      next(`/block/${e.message}`)
    })
}

const routes = [
  {
    path: '/',
    name: 'lv0',
    component: () => import('../views/lv0'),beforeEnter: pageCheck
  },
  {
    path: '/lv1',
    name: 'lv1',
    component: () => import('../views/lv1'),beforeEnter: pageCheck
  },
  {
    path: '/lv2',
    name: 'lv2',
    component: () => import('../views/lv2'),beforeEnter: pageCheck
  },
  {
    path: '/lv3',
    name: 'lv3',
    component: () => import('../views/lv3'),beforeEnter: pageCheck
  },
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
    path: '/block/:msg',
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
    path: '/page',
    name: '페이지',
    component: () => import('../views/page')
  },  
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  },
  {
    path: '*',
    name: 'e404',
    component: () => import('../views/e404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
