export default {
  displayContent: state => state.slides.isUserAbleToProceed,
  surveyResultLinks: state => state.slides.surveyResultLinks, 
  surveyResultsEmailWasSubmitted: state => state.slides.surveyResultsEmailWasSubmitted
}
