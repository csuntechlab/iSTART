import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
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
      path: '/',
      name: 'home',
      meta: { title: 'iSTART' },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'iSTART - About' },
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
