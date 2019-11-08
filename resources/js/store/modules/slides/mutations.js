export default {
  SET_MODULE_DATA (state, payload) {
    state.moduleData = payload
  },

  SET_MODULE_INDEX (state, payload) {
    state.currentModuleIndex = payload
  },

  SET_CURRENT_MODULE (state, payload) {
    state.currentModule = payload
  },

  NAVIGATE_FROM_SLIDE (state, payload) {
    state.slideContentVisibility = false

    let moduleData = state.moduleData
    let currentModuleIndex = state.currentModuleIndex
    let moduleProgress = moduleData[currentModuleIndex].progress

    if (payload === 'back') {
      moduleProgress.current_slide -= 1
    } else if (payload === 'forward') {
      moduleProgress.current_slide += 1
    }

    if (moduleProgress.current_slide > moduleProgress.latest_slide) {
      moduleProgress.latest_slide = moduleProgress.current_slide
    }

    // Calculate and store slide_percentage as number for module data
    let totalSlides = Object.keys(state.JSONSlideData).length
    moduleProgress.slide_percentage = ((moduleProgress.latest_slide / (totalSlides - 1)) * 100).toFixed(2)

    state.slideContentVisibility = true
  },

  NAVIGATE_TO_SLIDE (state, payload) {
    state.slideContentVisibility = false

    let moduleData = state.moduleData
    let currentModuleIndex = state.currentModuleIndex
    let moduleProgress = moduleData[currentModuleIndex].progress
    moduleProgress.current_slide = payload

    if (moduleProgress.current_slide > moduleProgress.latest_slide) {
      moduleProgress.latest_slide = payload
    }

    state.slideContentVisibility = true
  },

  SET_SLIDE_CONTENT_VISIBILITY (state, payload) {
    state.slideContentVisibility = payload
  },

  STORE_JSON_IN_STATE (state, payload) {
    state.JSONSlideData = payload
  },

  RESET_SLIDE_NAVIGATION (state) {
    state.enableContinue = false
    state.enableBack = false
  },

  ENABLE_CONTINUE (state) {
    state.enableContinue = true
  },

  DISABLE_CONTINUE (state) {
    state.enableContinue = false
  },

  ENABLE_BACK (state) {
    state.enableBack = true
  },

  /* Template specific JSON to State changes
   * Used to store content specific to template into the state
  */
  UPDATE_CARD (state, payload) {
    state.JSONSlideData[payload.currentSlideIndex].content.cards[payload.currentCardIndex].show = !payload.isFlipped

    let wasCardFlipped = state.JSONSlideData[payload.currentSlideIndex].content.cards[payload.currentCardIndex].was_flipped
    if (wasCardFlipped === false) {
      state.JSONSlideData[payload.currentSlideIndex].content.cards[payload.currentCardIndex].was_flipped = true
    }
  },

  CHECK_CARD_FLIPS (state, payload) {
    let cards = state.JSONSlideData[payload.currentSlideIndex].content.cards
    let cardsLength = Object.keys(state.JSONSlideData[payload.currentSlideIndex].content.cards).length

    for (let i = 0; i < cardsLength; i += 1) {
      if (cards[i].was_flipped === true) {
        state.JSONSlideData[payload.currentSlideIndex].content.cards_flipped = true
        state.enableContinue = true
      } else if (cards[i].was_flipped === false) {
        state.JSONSlideData[payload.currentSlideIndex].content.cards_flipped = false
        state.enableContinue = false
        break
      }
    }
  },

  // Multi Quiz Input Template
  UPDATE_MULTI_QUIZ_INPUT (state, payload) {
    let questionInput = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].input
    let questionResult = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].input[payload.inputIndex].result

    // Remove active on all inputs when a new input selected
    let inputLength = Object.keys(questionInput).length
    for (let i = 0; i < inputLength; i += 1) {
      questionInput[i].selected = false
    }

    state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].response = questionResult
    questionInput[payload.inputIndex].selected = true
  },

  SHOW_MULTI_QUIZ_QUESTION (state, payload) {
    let questions = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions
    let questionIndex = payload.questionsIndex
    let questionsLength = Object.keys(questions).length
    let nextQuestionIndex = (questionIndex + 1)

    for (let i = questionIndex; i < questionsLength; i += 1) {
      if (nextQuestionIndex < questionsLength) {
        questions[nextQuestionIndex].show = true
      }
    }
  },

  ENABLE_MULTI_QUIZ_REDIRECT (state, payload) {
    let indexStart = (payload.questionsIndex + 1)
    let indexEnd = payload.questionsLength

    for (let i = indexStart; i < indexEnd; i += 1) {
      state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[i].show = false
      state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[i].response = null
      let input = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[i].input
      let inputLength = Object.keys(input).length
      for (let j = 0; j < inputLength; j += 1) {
        input[j].selected = false
      }
    }
  },

  CHECK_MULTI_QUIZ_YES_AND_CRITERIA (state, payload) {
    let responses = state.JSONSlideData[payload.currentSlideIndex].header.results.responses
    let responsesLength = Object.keys(responses).length

    state.JSONSlideData[payload.currentSlideIndex].header.results.case.yes.isAndMet = true
    for (let i = 0; i < responsesLength; i += 1) {
      if (!responses[i].input[0].selected) {
        state.JSONSlideData[payload.currentSlideIndex].header.results.case.yes.isAndMet = false
      }
    }
  },

  CHECK_MULTI_QUIZ_NO_AND_CRITERIA (state, payload) {
    let responses = state.JSONSlideData[payload.currentSlideIndex].header.results.responses
    let responsesLength = Object.keys(responses).length

    state.JSONSlideData[payload.currentSlideIndex].header.results.case.no.isAndMet = true
    for (let i = 0; i < responsesLength; i += 1) {
      if (!responses[i].input[1].selected) {
        state.JSONSlideData[payload.currentSlideIndex].header.results.case.no.isAndMet = false
      }
    }
  },

  CHECK_MULTI_QUIZ_YES_OR_CRITERIA (state, payload) {
    let responses = state.JSONSlideData[payload.currentSlideIndex].header.results.responses
    let responsesLength = Object.keys(responses).length

    state.JSONSlideData[payload.currentSlideIndex].header.results.case.yes.isOrMet = false
    for (let i = 0; i < responsesLength; i += 1) {
      if (responses[i].input[0].selected) {
        state.JSONSlideData[payload.currentSlideIndex].header.results.case.yes.isOrMet = true
      }
    }
  },

  CHECK_MULTI_QUIZ_NO_OR_CRITERIA (state, payload) {
    let responses = state.JSONSlideData[payload.currentSlideIndex].header.results.responses
    let responsesLength = Object.keys(responses).length

    state.JSONSlideData[payload.currentSlideIndex].header.results.case.no.isOrMet = false
    for (let i = 0; i < responsesLength; i += 1) {
      if (responses[i].input[1].selected) {
        state.JSONSlideData[payload.currentSlideIndex].header.results.case.no.isOrMet = true
      }
    }
  },

  STORE_QUIZ_RESPONSES (state, payload) {
    state.JSONSlideData[payload.currentSlideIndex].header.results.responses = payload.previousSlideData
  },

  UPDATE_QUIZ_RESPONSE (state, payload) {
    let question = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex]
    let option = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex].options[payload.currentOptionIndex]
    question.showResponse = true
    option.show = !option.show
  },

  SURVEY_RESULTS_EMAIL_WAS_SUBMITTED (state, payload) {
    state.surveyResultsEmailWasSubmitted = payload
  },

  PASS_USER_RESPONSES_TO_PIE_CHART (state, payload) {
    state.responses[payload.index] = payload
  }
}
