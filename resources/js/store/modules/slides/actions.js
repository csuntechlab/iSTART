export default {
  changeSlide ({ commit }) {
    commit('IS_ABLE_TO_DISPLAY_CONTENT', true)
  },
  hideContent ({ commit }) {
    commit('IS_NOT_ABLE_TO_DISPLAY_CONTENT', false)
  }
}
