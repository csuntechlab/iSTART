import _login from '../../mutation-types/login';
import Login from '../../../api/login';
import router from '../../../router';

export default {
  
  verifyUserData({commit,dispatch}, payload) {
    Login.verifyUserDataAPI(
			payload,
			success => { 
				commit(_login.VERIFY_USER_DATA, success);
				router.push({name:'welcome'});

			},
			error => {
				console.log(error)}
		)
  }
}