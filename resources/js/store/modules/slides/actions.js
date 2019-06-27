import SlidesAPI from './../../../api/slides'

export default {
  // Used to navigate slides (back) or (forward) from a given slide
  navigateFromSlide ({ commit }, payload) {
    commit('NAVIGATE_FROM_SLIDE', payload)
  },

  // Used to navigate user to specific slide
  navigateToSlide ({ commit }, payload) {
    commit('NAVIGATE_TO_SLIDE', payload)
  },

  // Used to unload and load slide content
  setSlideContentVisibility ({ commit }, payload) {
    commit('SET_SLIDE_CONTENT_VISIBILITY', payload)
  },

  // Store JSON into state
  storeJSONInState ({ commit }, payload) {
    commit('STORE_JSON_IN_STATE', payload)
  },

  // Reset (continue) and (back) slide button states
  resetSlideNavigation ({ commit }) {
    commit('RESET_SLIDE_NAVIGATION')
  },

  // Enable (continue) to next slide button
  enableContinue ({ commit }) {
    commit('ENABLE_CONTINUE')
  },

  // Disable (continue) button
  disableContinue ({ commit }) {
    commit('DISABLE_CONTINUE')
  },

  // Enable (back) to previous slide button
  enableBack ({ commit }) {
    commit('ENABLE_BACK')
  },

  /* Template specific JSON to State changes
   * Used to store content specific to template into the state
  */
  async emailSurveyResults ({ commit }, payload) {
    return SlidesAPI.emailSurveyResultsAPI(payload)
      .then(
        () => {
          commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', true)
        })
      .catch(
        error => {
          console.error(error)
          commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', false)
        }
      )
  },

  updateCard ({ commit }, payload) {
    commit('UPDATE_CARD', payload)
  },

  updateResponse ({ commit }, payload) {
    commit('UPDATE_RESPONSE', payload)
  },

  getUserResponses ({ commit }, payload) {
    commit('PASS_USER_RESPONSES_TO_PIE_CHART', payload)
  }
}
