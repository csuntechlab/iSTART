import Login from '../../../api/login';
import router from '../../../router';

export default {
  
  verifyUserData(context,payload) {
    Login.verifyUserDataAPI(
			payload,
			success => {
				success.token = "1234";
				var cookieValue = success.token;
				var cookieExpirationDate = new Date();
				cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
				document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()}; `;
				// localStorage.setItem('userKey', success.token);
				context.commit('VERIFY_USER_DATA', success);
				router.push({name:'welcome'});
			},
			error => {
				console.log(error)
			}
		)
  }
}