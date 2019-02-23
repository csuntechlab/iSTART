import _login from '../../mutation-types/login';

export default { 
  [_login.VERIFY_USER_DATA](state, payload) {
    state.user = payload
  }
}