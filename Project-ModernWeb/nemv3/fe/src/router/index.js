import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$axios = axios
const apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/' : '/api/'
Vue.prototype.$apiRootPath = apiRootPath
axios.defaults.baseURL = apiRootPath // add
 //axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = localStorage.getItem('token')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axios.interceptors.response.use(response=> {
  const token = response.data.token
  console.log(token)
  if(token) localStorage.setItem('token',token)
  return response;
}, function (error) {

  return Promise.reject(error);
});


const pageCheck = (to, from, next) => {
  // axios.post('page', { name: to.path.replace('/', '') }, { headers: { Authorization: localStorage.getItem('token') } })
  axios.post('page', { name: to.path })
    .then((r) => {
      if (!r.data.success) throw new Error(r.data.msg)
      next()
    })
    .catch((e) => {
      // next(`/block/${e.message}`)
      next(`/block/${e.message.replace(/\//gi, ' ')}`)
    })
}

const routes = [
  {
    path: '/manage/boards',
    name: 'manageBoards',
    component: () => import('../views/manage/boards'),
    beforeEnter: pageCheck
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    beforeEnter: pageCheck
  },
  {
    path: '/board/:name',
    name: 'boardAnyone',
    component: () => import('../views/board'),
    beforeEnter: pageCheck
  },
  {
    path: '/lv0',
    name: 'lv0',
    component: () => import('../views/test/lv0'),beforeEnter: pageCheck
  },
  {
    path: '/lv1',
    name: 'lv1',
    component: () => import('../views/test/lv1'),beforeEnter: pageCheck
  },
  {
    path: '/lv2',
    name: 'lv2',
    component: () => import('../views/test/lv2'),beforeEnter: pageCheck
  },
  {
    path: '/lv3',
    name: 'lv3',
    component: () => import('../views/test/lv3'),beforeEnter: pageCheck
  },
  {
    path: '/register',
    name: '회원가입',
    component: () => import('../views/register')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/site',
    name: '사이트',
    component: () => import('../views/manage/sites'),
    beforeEnter: pageCheck
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
    component: () => import('../views/manage/pages'),beforeEnter: pageCheck
  },  
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/manage/user.vue'),beforeEnter: pageCheck
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
