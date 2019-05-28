export default {
  GET_SLIDE_INFO_FROM_JSON (state, payload) {
    state.importedJSONSlides = payload
  },

  UPDATE_CARD (state, payload) {
    state.importedJSONSlides[payload.currentSlideIndex].content.cards[payload.currentCardIndex].show = !payload.isFlipped
  },

  ENABLE_OR_DISABLE_CONTENT (state, payload) {
    state.isUserAbleToProceed = payload
  },

  ITERATE_THROUGH_CONTENT (state, payload) {
    state.slide_index = payload
  },

  SURVEY_RESULTS_EMAIL_WAS_SUBMITTED (state, payload) {
    state.surveyResultsEmailWasSubmitted = payload
  }
}
