import _login from '../../mutation-types/login';
import Login from '../../../api/login';
import router from '../../../router';

export default {
  
  verifyUserData({commit,dispatch}, payload) {
    Login.verifyUserDataAPI(
			payload,
			success => {
				success.token = "1234";
				var cookieValue = success.token;
				var cookieExpirationDate = new Date();
				cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() +1);
				document.cookie = `userKey = ${cookieValue}`;
				document.cookie = `expires = ${cookieExpirationDate.toUTCString()};`;
				commit(_login.VERIFY_USER_DATA, success);
				router.push({name:'welcome'});
			},
			error => {
				console.log(error)}
		)
  }
}