import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyAuctions from '../views/MyAuctions.vue'
import RegisterLogin from '../views/RegisterLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myAuctions',
    name: 'MyAuctions',
    component: MyAuctions
  },
  {
    path: '/registerLogin',
    name: 'RegisterLogin',
    component: RegisterLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
