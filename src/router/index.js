import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginLayout from '../layouts/LoginLayout'
import AdminLayout from '../layouts/AdminLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginLayout',
    component: LoginLayout,
    children: [
      {
        path: '/',
        component: () => import('../views/Login')
      },
      {
        path: 'register',
        component: () => import('../views/Register')
      }
    ]
  },
  {
    path: '/home',
    name: 'AdminLayout',
    component: AdminLayout,
    children: [
      {
        path: '/',
        component: () => import('../views/Home')
      },
      {
        path: 'user',
        component: () => import('../views/User')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
