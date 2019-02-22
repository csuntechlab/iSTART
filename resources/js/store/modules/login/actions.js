import _login from '../../mutation-types/login';
import Login from '../../../api/login';
export default {
  
  verifyUserData({commit,dispatch}, payload) {
    Login.verifyUserDataAPI(
			payload,
			success => {
				commit(_login.VERIFY_USER_DATA, success);
			},
			(error) => {console.log(error)}
		)
  }
}