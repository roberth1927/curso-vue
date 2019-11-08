import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    
    component: () => import('../views/Inicio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
