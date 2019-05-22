export default {
  PASS_USER_RESPONSES_TO_PIE_CHART (state, payload) {
    state.quizInput.responses.push(payload.responses)
    state.quizInput.counter += payload.counter
  },
  CHANGE_SLIDE_TYPE (state, payload) {
    state.slide_type = payload
  },
  GET_SLIDE_INFO_FROM_JSON (state, payload) {
    state.importedJSONSlides = payload
  },
  ENABLE_OR_DISABLE_CONTENT (state, payload) {
    state.isUserAbleToProceed = payload
  },
  ITERATE_THROUGH_CONTENT (state, payload) {
    state.slide_index = payload
  }
}
