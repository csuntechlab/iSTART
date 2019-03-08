import UserAPI from './../../../api/user';
import router from './../../../router';
export default {
async verifyUserData({commit},payload) {
	return UserAPI.verifyUserDataAPI(payload)
	.then(
		response => {
			if(response.data.valid==="1"){
				var cookieValue = response.data.token;
				var cookieExpirationDate = new Date();
				cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
				document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
				commit('VERIFY_USER_DATA', response.data);
				router.push({name:'welcome'});
			}
			else {
				commit('VERIFY_USER_DATA', response.data);
			}
		})
		.catch(
			failure => console.error(failure)
		)
	},
	clearUserData({commit}) {
		document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
		router.push({name: 'login'});
		commit('CLEAR_USER_DATA');
	}
}
