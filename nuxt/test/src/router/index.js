import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/lectures/card",
    name: "card",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lectures/card.vue")
  },
  {
    path: "/lectures/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lectures/layout.vue")
  },
  {
    path: "*",
    name: "e404",
    component: () => import(/* webpackChunkName: "about" */ "../views/e404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
