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
  // return next()
  axios.post(`${apiRootPath}page`, { name: to.path.replace('/', ''), headers: { Authorization: localStorage.getItem('token') } })
  //JSON.stringify(localStorage.getItem('token')) 이거 꼭 해주어야함 JSON.stringgify를 안해주면 백엔드에 오브젝트 타입으로 들어가서 손님계정으로 손님권한을 부여받을 수 없음 찾는데 2시간 걸림
    .then((r) => {
      if (!r.data.success) { throw new Error(r.data.msg)}
      next()
    })
    .catch((e) => {
  
      // console.error(e.message)
      next(`/block/${e.message}`)
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
    path: '/register',
    name: '회원가입',
    component: () => import('../views/register')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/site',
    name: '사이트',
    component: () => import('../views/site'),
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
    component: () => import('../views/page'),beforeEnter: pageCheck
  },  
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue'),beforeEnter: pageCheck
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../views/users.vue')
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
