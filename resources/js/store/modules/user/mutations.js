export default {
  VERIFY_USER_DATA (state, payload) {
    if (payload.valid === '1') {
      state.user = payload
      state.correctLoginInfo = true
    } else {
      state.correctLoginInfo = false
    }
  },

  CLEAR_USER_DATA (state) {
    state.user = {}
    state.correctLoginInfo = null
  }
}
