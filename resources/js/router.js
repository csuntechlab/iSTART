import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Welcome from './views/welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }
      
  ]
})
