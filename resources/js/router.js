import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Dashboard from './views/Dashboard.vue'
import ControlGroup from './views/ControlGroup.vue'
import ComparisonGroup from './views/ComparisonGroup.vue'
import InterventionGroup from './views/InterventionGroup.vue'
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
      name: 'login',
      component: Login,
      meta: { title: 'iSTART | login' }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: { title: 'iSTART' }
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { title: 'iSTART' }
    },
    {
      path: '/controlgroup',
      name: 'ControlGroup',
      meta: { title: 'iSTART - Control' },
      component: ControlGroup
    },
    {
      path: '/comparisonGroup',
      name: 'ComparisonGroup',
      meta: { title: 'iSTART - Comparison' },
      component: ComparisonGroup
    },
    {
      path: '/interventiongroup',
      name: 'InterventionGroup',
      meta: { title: 'iSTART - Intervention' },
      component: InterventionGroup
    }
  ]
})
