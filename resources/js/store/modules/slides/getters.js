export default {
  displayContent: state => state.isUserAbleToProceed,
  userResponses: state => index => state.responses[index].response,
  userValidity: state => index => state.responses[index].valid,
  surveyResultLinks: state => state.surveyResultLinks,
  surveyResultsEmailWasSubmitted: state => state.surveyResultsEmailWasSubmitted,
  slideNumber: state => state.slide_index,
  current_slide: state => index => state.importedJSONSlides[index],
  amountOfSlides: state => Object.keys(state.importedJSONSlides).length
}
