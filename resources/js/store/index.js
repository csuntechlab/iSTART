import Vue from 'vue'
import Vuex from 'vuex'
import '../router'

//INIT VUEX
Vue.use(Vuex)

//MODULES
import User from './modules/user'
import Admin from './modules/admin'

//MODULE MAP
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    User,
    Admin
  }
})
