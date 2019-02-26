import Login from './../../../api/login';
import router from './../../../router';

export default {
  
  verifyUserData({commit},payload) {
  Login.verifyUserDataAPI(
			payload,
			success => {
				var cookieValue = success.token;
				var cookieExpirationDate = new Date();
				cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
				document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
				commit('VERIFY_USER_DATA', success);
				router.push({name:'welcome'});
			},
			error => {
				console.log(error)
			}
		)
	},
	clearUserData({commit}) {
		document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
		router.push({name: 'login'});
		commit('CLEAR_USER_DATA');
	}
}