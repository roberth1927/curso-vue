import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require("firebase/app");


Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/Inicio.vue'),
    // ruta protegida
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import('../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // si en mi ruta existe el meta requerido devuelve un true o false
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);

  // aqui obtengo un usuario o un null si el usuario se registro
  const user = firebase.auth().currentUser;

  // si existe una ruta protegida y el user no esta registrado
  if (rutaProtegida & user === null) {
  // lo envio al login
    next({name:'ingreso'})
  }else {
    next()
  }
})

export default router
