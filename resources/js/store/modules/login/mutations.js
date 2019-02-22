import _login from '../../mutation-types/login';

export default { 
  [_login.VERIFY_USER_DATA](state, payload) {
    console.log('this is from the mutation');
    console.log(payload);
    state.email = payload.email;
    state.password = payload.password;
  }
}