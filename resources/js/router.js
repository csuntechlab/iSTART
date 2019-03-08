import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Welcome from './views/Welcome.vue'
import ControlGroup from './views/ControlGroup.vue'
import ComparisonGroup from './views/ComparisonGroup.vue'
import InterventionGroup from './views/InterventionGroup.vue'
import Dashboard from './components/Dashboard.vue'
import Test from './views/Test.vue'
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
      path: '/',
      name: 'welcome',
      component: Welcome,
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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/test',
      name: 'Test',
      meta: { title: 'iSTART - Test' },
      component: Test
    }
  ]
})
