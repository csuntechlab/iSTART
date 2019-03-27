
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
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
