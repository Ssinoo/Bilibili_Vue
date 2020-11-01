import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import Login from '../views/Login.vue'
import Userinfo from '../views/Userinfo.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: Userinfo
  }, {
    path: '/',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
