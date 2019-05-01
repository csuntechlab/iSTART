export default {
  IS_ABLE_TO_DISPLAY_CONTENT (state, payload) {
    state.slides.hasUserSelectedAnOption = payload
  },
  IS_NOT_ABLE_TO_DISPLAY_CONTENT (state, payload) {
    state.slides.hasUserSelectedAnOption = payload
  }
}
