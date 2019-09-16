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
  },

  UPDATE_CARD_COUNT (state, payload) {
    let totalCardCount = Object.keys(state.JSONSlideData[payload.currentSlideIndex].content.cards).length
    state.JSONSlideData[payload.currentSlideIndex].content.card_flip_count += payload.number

    if (state.JSONSlideData[payload.currentSlideIndex].content.card_flip_count === totalCardCount) {
      state.JSONSlideData[payload.currentSlideIndex].content.cards_flipped = true
      state.enableContinue = true
    }
  },

  UPDATE_MULTI_QUIZ_INPUT (state, payload) {
    let questionInput = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].input

    // Remove active on all inputs when a new input selected
    let inputLength = Object.keys(questionInput).length
    for (let i = 0; i < inputLength; i += 1) {
      questionInput[i].selected = false
    }

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
    }
  },

  UPDATE_RESPONSE (state, payload) {
    let question = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex]
    let option = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex].options[payload.currentOptionIndex]
    question.showResponse = true
    option.show = true
  },

  SURVEY_RESULTS_EMAIL_WAS_SUBMITTED (state, payload) {
    state.surveyResultsEmailWasSubmitted = payload
  },

  PASS_USER_RESPONSES_TO_PIE_CHART (state, payload) {
    state.responses[payload.index] = payload
  }
}
