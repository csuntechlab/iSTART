import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Dashboard from './views/Dashboard.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: 'iSTART | login' }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { title: 'iSTART' }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'iSTART' }
    }
  ]
})
