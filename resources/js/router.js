import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Dashboard from './views/Dashboard.vue'
import Error from './views/Error.vue'
import schedule from './views/schedule.vue'
import admin from './views/admin.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Error',
      component: Error,
      meta: { title: 'iSTART | Error' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { title: 'iSTART | Logout' }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'iSTART | Dashboard' }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
      meta: { title: 'iSTART | Schedule' }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { title: 'iSTART | Admin' }
    }
  ]
})
