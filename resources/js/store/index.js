import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import './../router'

// INIT VUEX
Vue.use(Vuex)

// MODULE MAP
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    User,
  }
})

export default store
