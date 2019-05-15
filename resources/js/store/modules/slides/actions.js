export default {
  allowUserToContinue ({ commit }, payload) {
    commit('ENABLE_OR_DISABLE_CONTINUE', payload)
  }
}
