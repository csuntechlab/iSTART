export default {
  ENABLE_OR_DISABLE_CONTINUE (state, payload) {
    state.slides.isUserAbleToProceed = payload
  },
  PASS_USER_RESPONSES_TO_PIE_CHART (state, payload) {
    state.slides.quizInput.responses.push(payload.responses)
    state.slides.quizInput.counter += payload.counter
  }
}
