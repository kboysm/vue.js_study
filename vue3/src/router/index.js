import { createRouter, createWebHistory } from 'vue-router'
import homeRoute from './homeRoute.js'
import detailRoute from './detailRoute.js'

const routes = [
 ...homeRoute , ...detailRoute
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
