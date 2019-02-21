import _login from '../../mutation-types/login';

export default {
  fetchIndustries({ commit, dispatch }, payload) {
		commit(_industries.TRIGGER_IS_LOADING, payload);
		// Industries.fetchIndustriesAPI(
		// 	payload,
		// 	success => {
		// 		commit(_industries.FETCH_INDUSTRIES, success);
		// 		commit(_industries.TRIGGER_IS_LOADING, success);
		// 	},
		// 	(error) =>{commit(_global.ERROR_ALERT,error)
    //         }
    // );
  },
  verifyUserData({commit,dispatch}, payload) {
    commit(_login.VERIFY_USER_DATA, payload);
  }
}