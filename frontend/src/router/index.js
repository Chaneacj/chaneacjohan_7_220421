import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'
import auth from '../middleware/auth'
import VueRouteMiddleware from 'vue-route-middleware'

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
    component: Feed,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/Profile/:id',
    name: 'Profile',
    component: Profile,
    meta: {
      middleware: auth
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

router.beforeEach(VueRouteMiddleware())
export default router
