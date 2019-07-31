export default {
  isSlideContentVisible: state => state.slideContentVisibility,
  isContinueButtonEnabled: state => state.enableContinue,
  isBackButtonEnabled: state => state.enableBack,

  getCurrentModule: state => state.currentModule,
  getSlideData: state => index => state.JSONSlideData[index], // Gets specified slide data
  currentSlideData: state => state.JSONSlideData[state.currentSlideNumber], // Gets current slide data
  currentSlideNumber: state => state.currentSlideNumber,
  latestSlideNumber: state => state.latestSlideNumber,
  totalSlides: state => Object.keys(state.JSONSlideData).length,

  userResponses: state => index => state.responses[index].response,
  userValidity: state => index => state.responses[index].valid,
  surveyResultLinks: state => state.surveyResultLinks,
  surveyResultsEmailWasSubmitted: state => state.surveyResultsEmailWasSubmitted
}
