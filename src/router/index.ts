import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Mod from '../views/Mod.vue'
import ModLoader from '../views/ModLoader.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/mod',
    name: 'mod',
    component: Mod
  },
  {
    path: '/mod-loader',
    name: 'mod-loader',
    component: ModLoader
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
