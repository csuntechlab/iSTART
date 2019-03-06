import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'


//INIT VUEX
Vue.use(Vuex);

//MODULES
import User from './modules/user';

//MODULE MAP
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		User
	}
});
