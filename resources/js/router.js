import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/login.vue'
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
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: 'iSTART | login' }
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
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
