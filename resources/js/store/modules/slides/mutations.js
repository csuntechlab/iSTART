export default {
  ENABLE_OR_DISABLE_CONTINUE (state, payload) {
    state.isUserAbleToProceed = payload
  },
  SURVEY_RESULTS_EMAIL_WAS_SUBMITTED(state, payload) {
    state.surveyResultsEmailWasSubmitted = payload
  }
}
