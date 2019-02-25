import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Welcome from './views/welcome.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {title: 'iSTART | login'}
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { title: 'iSTART' },
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
      
  ]
})
