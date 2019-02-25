export default { 
  VERIFY_USER_DATA(state, payload) {
    state.user = payload;
    state.correctLoginInfo = true;
  },
  CLEAR_USER_DATA(state) {
    state.user = {};
    state.correctLoginInfo = null;
  }
}