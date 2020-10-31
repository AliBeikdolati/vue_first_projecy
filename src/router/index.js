import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/test1',
    name: 'test1',
    component:  () => import('../views/test1.vue')
  },
  {
    path: '/productCards',
    name: 'productCards',
    component:  () => import('../views/productCards.vue')
  },
  {
    path: '/card',
    name: 'card',
    component:  () => import('../views/card.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
