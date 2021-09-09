import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/Profile/:id',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
