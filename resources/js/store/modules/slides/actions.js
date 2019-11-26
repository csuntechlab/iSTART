import SlidesAPI from './../../../api/slides'

export default {
  // Module Functionality
  setModuleData ({ commit }, payload) {
    commit('SET_MODULE_DATA', payload)
  },

  async requestModuleProgress ({ commit }, payload) {
    let userId = payload.userId
    let userGroup = payload.userGroup
    let moduleData = payload.moduleData
    SlidesAPI.getModuleProgressAPI(userId)
      .then(
        response => {
          let currentModule = response.current_module
          let currentPage = response.current_page
          let maxPage = response.max_page
          commit('REQUEST_MODULE_PROGRESS', { currentModule: currentModule, currentPage: currentPage, maxPage: maxPage, userGroup: userGroup, moduleData: moduleData })
        })
      .catch(
        error => {
          console.error(error)
        }
      )
      .finally(() => {
        commit('SET_INITIAL_DATA_LOAD', false)
      })
  },

  setModuleIndex ({ commit }, payload) {
    commit('SET_MODULE_INDEX', payload)
  },

  setCurrentModule ({ commit }, payload) {
    commit('SET_CURRENT_MODULE', payload)
  },

  // Stores Specified Module Into State
  storeJSONInState ({ commit }, payload) {
    commit('STORE_JSON_IN_STATE', payload)
  },

  // Slide Navigation Functionality
  navigateFromSlide ({ commit }, payload) {
    commit('NAVIGATE_FROM_SLIDE', payload)
  },

  navigateToSlide ({ commit }, payload) {
    commit('NAVIGATE_TO_SLIDE', payload)
  },

  // Slide Navigation Button States
  resetSlideNavigation ({ commit }) {
    commit('RESET_SLIDE_NAVIGATION')
  },

  enableContinue ({ commit }) {
    commit('ENABLE_CONTINUE')
  },

  enableBack ({ commit }) {
    commit('ENABLE_BACK')
  },

  disableContinue ({ commit }) {
    commit('DISABLE_CONTINUE')
  },

  // Toggles If Slide is Displayed (true/false)
  setSlideContentVisibility ({ commit }, payload) {
    commit('SET_SLIDE_CONTENT_VISIBILITY', payload)
  },

  // On Module Completion
  submitEmailOnModuleCompletion ({ commit }, payload) {
    let currentModule = payload.currentModule
    let moduleData = payload.moduleData
    let moduleDataCount = Array.from(moduleData).length

    for (let i = 0; i < moduleDataCount; i += 1) {
      if (currentModule === moduleData[i].name && !moduleData[i].is_complete) {
        SlidesAPI.sendCompletedModuleMail(payload)
      }
    }
  },

  // Email Form Template
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

  // Card Flip Template
  updateCard ({ commit }, payload) {
    commit('UPDATE_CARD', payload)
  },

  checkCardFlips ({ commit }, payload) {
    commit('CHECK_CARD_FLIPS', payload)
  },

  // Input Comparison Template
  updateInputToResponded ({ commit }, payload) {
    commit('UPDATE_INPUT_TO_RESPONDED', payload)
  },

  updateInputValidity ({ commit }, payload) {
    commit('UPDATE_INPUT_VALIDITY', payload)
  },

  storeUserResponse ({ commit }, payload) {
    commit('STORE_USER_RESPONSE', payload)
  },

  // Quiz Template
  updateQuizResponse ({ commit }, payload) {
    commit('UPDATE_QUIZ_RESPONSE', payload)
  },

  // Multi Quiz Question Template
  updateMultiQuizInput ({ commit }, payload) {
    commit('UPDATE_MULTI_QUIZ_INPUT', payload)
  },

  showMultiQuizQuestion ({ commit }, payload) {
    commit('SHOW_MULTI_QUIZ_QUESTION', payload)
  },

  enableMultiQuizRedirect ({ commit }, payload) {
    commit('ENABLE_MULTI_QUIZ_REDIRECT', payload)
  },

  checkMultiQuizYesAndCriteria ({ commit }, payload) {
    commit('CHECK_MULTI_QUIZ_YES_AND_CRITERIA', payload)
  },

  checkMultiQuizNoAndCriteria ({ commit }, payload) {
    commit('CHECK_MULTI_QUIZ_NO_AND_CRITERIA', payload)
  },

  checkMultiQuizYesOrCriteria ({ commit }, payload) {
    commit('CHECK_MULTI_QUIZ_YES_OR_CRITERIA', payload)
  },

  checkMultiQuizNoOrCriteria ({ commit }, payload) {
    commit('CHECK_MULTI_QUIZ_NO_OR_CRITERIA', payload)
  },

  storeQuizResponses ({ commit }, payload) {
    commit('STORE_QUIZ_RESPONSES', payload)
  }
}
