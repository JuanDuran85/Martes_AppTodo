import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias:['/Inicio','/inicio']
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import('../views/Agregar.vue')
  },
  {
    path: '/ver',
    name: 'Ver',
    component: () => import('../views/Ver.vue')
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: () => import('../views/Registro.vue'),
    alias: ['/registro','/crearcuenta','/cuenta','/crear']
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
