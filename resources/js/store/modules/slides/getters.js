export default {
  displayContent: state => state.isUserAbleToProceed,
  slideNumber: state => state.slide_index,
  current_slide: state => index => state.importedJSONSlides[index]
}
