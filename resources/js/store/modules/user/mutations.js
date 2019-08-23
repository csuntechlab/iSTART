export default {
  SET_TO_DEVELOPMENT_MODE (state) {
    state.developmentMode = true
  },

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
  SET_CATEGORIZED_PARTICIPANTS (state, payload) {
    state.categorizedParticipants = payload
  },

  PARTICIPANTS_WERE_SUBMITTED (state, payload) {
    state.categorizedParticipants= {}
    state.participantsWereSubmitted = payload
  }
}
