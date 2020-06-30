import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "../views/home/home"
import category from "../views/category/category"
import shopcart from "../views/shopcart/shopcart"
import profile from "../views/profile/profile"

const detail = () => import("../views/detail/detail")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/shopcart",
    component: shopcart
  },
  {
    path: "/profile",
    component: profile
  },
  {
    path: "/detail",
    component: detail
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
