import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Slides from './modules/slides'
import './../router'

// INIT VUEX
Vue.use(Vuex)

// MODULE MAP
const store = new Vuex.Store({
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    User: User,
    Slides: Slides
  }
})

export default store
