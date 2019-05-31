import SlidesAPI from './../../../api/slides'
export default {
  getSlideInfo ({ commit }, payload) {
    commit('GET_SLIDE_INFO_FROM_JSON', payload)
  },

  updateCard ({ commit }, payload) {
    commit('UPDATE_CARD', payload)
  },

  updateResponse ({ commit }, payload) {
    commit('UPDATE_RESPONSE', payload)
  },

  allowUserToContinue ({ commit }, payload) {
    commit('ENABLE_OR_DISABLE_CONTENT', payload.isAbleToProceed)
    if (payload.slide_index > -1) {
      commit('ITERATE_THROUGH_CONTENT', payload.slide_index)
    }
  },

  async emailSurveyResults ({ commit }, payload) {
    return SlidesAPI.emailSurveyResultsAPI(payload)
      .then(
        response => {
          commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', true)
        })
      .catch(
        failure => {
          console.error(failure)
          commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', false)
        }
      )
  }
}
