export default {
  displayContent: state => state.isUserAbleToProceed,
  quizInputCount: state => state.quizInput.counter,
  amountOfResponses: state => state.quizInput.responses.length,
  userResponses: state => state.quizInput.responses
}
