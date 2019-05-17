export default {
  GET_SLIDE_INFO_FROM_JSON (state, payload) {
    state.slides = payload
  },
  ENABLE_OR_DISABLE_CONTENT (state, payload) {
    state.isUserAbleToProceed = payload
    console.log('state.isUserAbleToProceed: ', state.isUserAbleToProceed )
  },
  ITERATE_THROUGH_CONTENT (state, payload) {
    state.slide_index = payload
  }
}
