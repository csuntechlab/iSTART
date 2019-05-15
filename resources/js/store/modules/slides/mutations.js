export default {
  ENABLE_OR_DISABLE_CONTINUE (state, payload) {
    state.slides.isUserAbleToProceed = payload
  }
}
