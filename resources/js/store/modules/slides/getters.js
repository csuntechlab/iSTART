export default {
  displayContent: state => state.isUserAbleToProceed,
  surveyResultLinks: state => state.surveyResultLinks, 
  surveyResultsEmailWasSubmitted: state => state.surveyResultsEmailWasSubmitted,
  slideNumber: state => state.slide_index,
  current_slide: state => index => state.importedJSONSlides[index]
}
