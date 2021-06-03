import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../modules/home'
import Sign from '../modules/sign'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
