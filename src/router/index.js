import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/forms/Auth'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {Auth: false, title: 'inicio'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Auth,
      meta: {Auth: false, title: 'Ingresar'}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {Auth: false, title: 'Registrarse'}
    }
  ]
})
