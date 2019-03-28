
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import './../sass/app.scss'
import VueProgress from 'vue-progress-path'

Vue.use(VueProgress)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

require('./bootstrap.js')

// Before each route change check if route needs & has proper authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.correctLoginInfo) {
      next({ path: '/login' })
    } else if (store.getters.user.isAdmin && to.meta.adminAuth) {
      next()
    } else if (!(store.getters.user.isAdmin) && to.meta.userAuth) {
      next()
    } else {
      next(from.path)
    }
  } else {
    next()
  }
})
