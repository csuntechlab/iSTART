import User from './../../../api/user';
import router from './../../../router';
import axios from 'axios';
export default {

async verifyUserData({commit},payload) {
  	// Login.verifyUserDataAPI(
		// 	payload,
		// 	success => {
		// 		var cookieValue = success.token;
		// 		var cookieExpirationDate = new Date();
		// 		cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
		// 		document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
		// 		commit('VERIFY_USER_DATA', success);
		// router.push({name:'welcome'});
		// 	},
		// 	error => {
		// 		console.log(error)
		// 	}
		// )
	// return axios.post('http://www.mocky.io/v2/5c734b2f330000e42176029b', payload)
	// .then(
	// 	response => {
	// 		var cookieValue = response.data.token;
	// 		var cookieExpirationDate = new Date();
	// 		cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
	// 		document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
	// 		commit('VERIFY_USER_DATA', response.data)
	// 		router.push({name:'welcome'});

	// 	})
	// .catch(
	// 	failure => console.log(failure)
	// )
	return User.verifyUserDataAPI(payload)
	.then(
		response => {
			var cookieValue = response.data.token;
			var cookieExpirationDate = new Date();
			cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
			document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
			commit('VERIFY_USER_DATA', response.data);
			router.push({name:'welcome'});

		})
		.catch(
			failure => console.log(failure)
		)
	},
	clearUserData({commit}) {
		document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
		router.push({name: 'login'});
		commit('CLEAR_USER_DATA');
	}
}