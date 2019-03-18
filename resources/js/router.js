import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Welcome from './views/Welcome.vue'
import ControlGroup from './views/ControlGroup.vue'
import ComparisonGroup from './views/ComparisonGroup.vue'
import InterventionGroup from './views/InterventionGroup.vue'
import Dashboard from './components/global/Dashboard.vue'
import Error from './views/Error.vue'
import schedule from './views/schedule.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
      meta: { title: 'iSTART | Schedule' }
    }
  ]
})
