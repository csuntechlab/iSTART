export default {
  allowUserToContinue ({ commit }, payload) {
    commit('ENABLE_OR_DISABLE_CONTINUE', payload)
  },
  getUserResonses ({ commit }, payload) {
    commit('PASS_USER_RESPONSES_TO_PIE_CHART', payload)
  }
}
