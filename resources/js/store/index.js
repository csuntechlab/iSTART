import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'


//INIT VUEX
Vue.use(Vuex);

//MODULES
import Login from './modules/login';

//MODULE MAP
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		Login
	}
});