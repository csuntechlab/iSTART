import SlidesAPI from './../../../api/slides'
export default {
  allowUserToContinue ({ commit }, payload) {
    commit('ENABLE_OR_DISABLE_CONTINUE', payload)
  },
  async emailSurveyResults({commit}, payload) {
    return SlidesAPI.emailSurveyResultsAPI(payload)
    .then(
      response => {
        commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', true)
      })
    .catch(
      failure=> {
        console.error(failure)
        commit('SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', false)
        
      }
    )
  }
}
