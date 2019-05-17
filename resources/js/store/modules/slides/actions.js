export default {
  getSlideInfo ({ commit }, payload) {
    commit('GET_SLIDE_INFO_FROM_JSON', payload)
  },
  allowUserToContinue ({ commit }, payload) {
    commit('ENABLE_OR_DISABLE_CONTENT', payload.isAbleToProceed)
    if (payload.slide_index) {
      if (payload.slide_index > -1) {
        console.log('am iterating here')
        commit('ITERATE_THROUGH_CONTENT', payload.slide_index)
      }
    }
  }
}
