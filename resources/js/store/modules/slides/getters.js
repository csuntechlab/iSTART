export default {
  displayContent: state => state.slides.isUserAbleToProceed,
  quizInputCount: state => state.slides.quizInput.counter,
  amountOfResponses: state => state.slides.quizInput.responses.length,
  userResponses: state => state.slides.quizInput.responses
}
