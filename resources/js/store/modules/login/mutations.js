export default { 
  VERIFY_USER_DATA(state, payload) {
    state.user = payload;
  },
  CLEAR_USER_DATA(state,payload) {
    state.user = {};
  }
}