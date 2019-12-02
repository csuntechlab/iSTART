export default {
  isSlideContentVisible: state => state.slideContentVisibility,
  isContinueButtonEnabled: state => state.enableContinue,
  isBackButtonEnabled: state => state.enableBack,
  isInitialDataLoad: state => state.isInitialDataLoad,

  getModuleData: state => state.moduleData,
  getCurrentModule: state => state.currentModule,
  getSlideData: state => index => state.JSONSlideData[index], // Gets specified slide data
  currentSlideData: state => state.JSONSlideData[state.moduleData[state.currentModuleIndex].progress.current_slide], // Gets current slide data
  currentSlideNumber: state => state.moduleData[state.currentModuleIndex].progress.current_slide,
  latestSlideNumber: state => state.moduleData[state.currentModuleIndex].progress.latest_slide,
  totalSlides: state => Object.keys(state.JSONSlideData).length,

  surveyResultsEmailWasSubmitted: state => state.surveyResultsEmailWasSubmitted
}
