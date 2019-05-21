export default {
  ENABLE_OR_DISABLE_CONTINUE (state, payload) {
    state.isUserAbleToProceed = payload
  },
  PASS_USER_RESPONSES_TO_PIE_CHART (state, payload) {
    state.quizInput.responses.push(payload.responses)
    state.quizInput.counter += payload.counter
  }
}
