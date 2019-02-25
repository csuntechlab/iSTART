import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import InterventionGroup from './views/InterventionGroup.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/interventiongroup',
      name: 'InterventionGroup',
      component: InterventionGroup
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
