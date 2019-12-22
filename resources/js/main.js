import Vue from 'vue'
import VueProgress from 'vue-progress-path'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import { Pie } from 'vue-chartjs'
import VueYouTubeEmbed from 'vue-youtube-embed'

require('./bootstrap')

Vue.use(Pie)
Vue.use(VueProgress)
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

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
  // returns user back to their previous page
  if (to.matched[0].path === '*') {
    next({ path: from.path })
  }
})
