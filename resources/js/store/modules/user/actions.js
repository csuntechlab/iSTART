import UserAPI from './../../../api/user';
import router from './../../../router';
export default {
async verifyUserData({commit},payload) {
	return UserAPI.verifyUserDataAPI(payload)
	.then(
		response => {
			var cookieValue = response.token;
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