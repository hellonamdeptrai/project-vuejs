import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginLayout from '../layouts/LoginLayout'
import AdminLayout from '../layouts/AdminLayout'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginLayout',
    component: LoginLayout,
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login')
      },
      {
        path: 'register',
        name: 'Login',
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
        name: 'Home',
        component: () => import('../views/Home')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/User')
      },
      {
        path: 'changepassword',
        name: 'ChangePassword',
        component: () => import('../views/ChangePassword')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.auth.isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
