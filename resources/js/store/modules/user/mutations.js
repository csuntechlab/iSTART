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
  },

  LOGIN_IS_LOADING (state, payload) {
    state.loginIsLoading = payload
  },

  LOGIN_FAILED (state) {
    state.loginFailed = true
  },

  SET_CATEGORIZED_PARTICIPANTS (state, payload) {
    state.categorizedParticipants = payload
  },

  SHOW_PARTICIPANTS_LIST (state) {
    state.isParticipantsListShown = true
  },

  HIDE_PARTICIPANTS_LIST (state) {
    state.isParticipantsListShown = false
  },

  PARTICIPANTS_WERE_SUBMITTED (state, payload) {
    state.categorizedParticipants = {}
    state.participantsWereSubmitted = payload
  }
}
