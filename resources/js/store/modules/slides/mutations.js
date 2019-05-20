export default {
  ENABLE_OR_DISABLE_CONTINUE (state, payload) {
    state.slides.isUserAbleToProceed = payload
  },
  SURVEY_RESULTS_EMAIL_WAS_SUBMITTED(state, payload) {
    state.slides.surveyResultsEmailWasSubmitted = payload
  }
}
