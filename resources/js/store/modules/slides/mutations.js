import moment from 'moment'
import { parseDate } from './../../../mixins/parseDate'

export default {
  // Module Functionality
  SET_MODULE_DATA (state, payload) {
    state.moduleData = payload
  },

  SET_INITIAL_DATA_LOAD (state, payload) {
    state.isInitialDataLoad = payload
  },

  REQUEST_MODULE_PROGRESS (state, payload) {
    let userGroup = payload.conditions.user_group
    let moduleDataLength = Object.keys(state.moduleData).length

    for (let i = 0; i < moduleDataLength; i += 1) {
      let completedModuleArrayLength = payload.data.length
      let moduleDataItem = state.moduleData[i]
      let moduleDataGroup = moduleDataItem.group

      if ((completedModuleArrayLength === undefined || completedModuleArrayLength === null) && (userGroup === moduleDataGroup)) {
        // If there are no completedModules, show first module that matches user_group
        let dueDate = payload.data.expiration_date

        state.moduleData[i].show = true
        state.moduleData[i].progress.due_date = parseDate.parseDate(dueDate)
        break
      } else if (userGroup === moduleDataGroup) {
        let currentCompletedModule = payload.data[0]
        let currentCompletedModuleName = currentCompletedModule.current_module.toLowerCase()
        let currentCompletedModuleSlideNumber = currentCompletedModule.current_page
        let currentCompletedModuleSlideTotal = currentCompletedModule.max_page
        let moduleDataName = moduleDataItem.name.toLowerCase()
        let expirationDate = currentCompletedModule.expiration_date

        // Conditionals Checks
        let isModuleNameMatching = (moduleDataName === currentCompletedModuleName)
        let isSlideNumberZero = ((currentCompletedModuleSlideNumber === 0) && (currentCompletedModuleSlideTotal === 0))
        let isSlideNumberEqual = (currentCompletedModuleSlideNumber === currentCompletedModuleSlideTotal)

        // Date Conditionals
        let currentDate = moment().format('YYYY-MM-DD')
        let daysToRelease = payload.conditions.days_to_release

        if (isModuleNameMatching && isSlideNumberEqual && isSlideNumberZero) {
          let previousModuleCompletion = payload.data[1].completed_at.split(' ')[0]
          let releaseDate = moment(previousModuleCompletion).add(daysToRelease, 'days').format('YYYY-MM-DD')
          let formattedReleaseDate = moment(previousModuleCompletion).add(daysToRelease, 'days').format('MM/DD/YYYY')
          let isModuleReleased = moment(currentDate).isSameOrAfter(releaseDate)

          // If module has not been started
          if (isModuleReleased) {
            moduleDataItem.show = true
            moduleDataItem.progress.is_review = false
            moduleDataItem.progress.current_slide = 0
            moduleDataItem.progress.latest_slide = 0
            moduleDataItem.progress.slide_percentage = 0
            moduleDataItem.progress.due_date = parseDate.parseDate(expirationDate)
          } else {
            state.nextModuleDate = formattedReleaseDate
          }

          break
        } else if (isModuleNameMatching && isSlideNumberEqual && !isSlideNumberZero) {
          // If module is complete
          moduleDataItem.show = true
          moduleDataItem.progress.is_review = true
          moduleDataItem.progress.current_slide = 0
          moduleDataItem.progress.latest_slide = 0
          moduleDataItem.progress.slide_percentage = 100

          break
        } else if (isModuleNameMatching && !isSlideNumberZero) {
          // Set Progress for current Module
          moduleDataItem.show = true
          moduleDataItem.progress.is_review = false
          moduleDataItem.progress.current_slide = currentCompletedModuleSlideNumber
          moduleDataItem.progress.latest_slide = currentCompletedModuleSlideNumber
          moduleDataItem.progress.slide_percentage = ((currentCompletedModuleSlideNumber / currentCompletedModuleSlideTotal) * 100).toFixed(2)

          break
        } else {
          // Mark module as completed if already completed previously
          moduleDataItem.show = true
          moduleDataItem.progress.is_review = true
          moduleDataItem.progress.slide_percentage = 100
        }
      }
    }
  },

  SET_MODULE_INDEX (state, payload) {
    state.currentModuleIndex = payload
  },

  SET_CURRENT_MODULE (state, payload) {
    state.currentModule = payload
  },

  // Stores Specified Module Into State
  STORE_JSON_IN_STATE (state, payload) {
    state.JSONSlideData = payload
  },

  // Slide Navigation Functionality
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

  // Slide Navigation Button States
  RESET_SLIDE_NAVIGATION (state) {
    state.enableContinue = false
    state.enableBack = false
  },

  ENABLE_CONTINUE (state) {
    state.enableContinue = true
  },

  ENABLE_BACK (state) {
    state.enableBack = true
  },

  DISABLE_CONTINUE (state) {
    state.enableContinue = false
  },

  // Toggles If Slide is Displayed (true/false)
  SET_SLIDE_CONTENT_VISIBILITY (state, payload) {
    state.slideContentVisibility = payload
  },

  // Set module as review state
  MARK_MODULE_AS_REVIEW (state, index) {
    state.moduleData[index].progress.is_review = true
  },

  // Mark ALL modules into Review mode (Demo Mode)
  MARK_ALL_MODULES_AS_REVIEW (state) {
    let moduleDataLength = Object.keys(state.moduleData).length

    for (let i = 0; i < moduleDataLength; i += 1) {
      let moduleDataItem = state.moduleData[i]
      moduleDataItem.progress.is_review = true
    }
  },

  // Wellness Goal
  INITIATE_WELLNESS_GOAL_LOAD (state) {
    state.isWellnessGoalLoading = true
  },

  WELLNESS_GOAL_EMAIL_WAS_SUBMITTED (state, payload) {
    state.wasWellnessGoalEmailSubmitted = payload
    state.isWellnessGoalLoading = false
  },

  // Card Flip Template
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

  // Input Comparison Template
  UPDATE_INPUT_TO_RESPONDED (state, payload) {
    state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.questionIndex].hasResponded = payload.hasResponded
  },

  UPDATE_INPUT_VALIDITY (state, payload) {
    state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.questionIndex].isValidated = payload.isValidated
  },

  STORE_USER_RESPONSE (state, payload) {
    state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.questionIndex].userResponse = payload.userResponse
  },

  // Quiz Template
  UPDATE_QUIZ_RESPONSE (state, payload) {
    let question = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex]
    let option = state.JSONSlideData[payload.currentSlideIndex].content.questions[payload.currentQuestionIndex].options[payload.currentOptionIndex]
    question.showResponse = true
    option.show = !option.show
  },

  // Multi Quiz Question Template
  UPDATE_MULTI_QUIZ_INPUT (state, payload) {
    let questionInput = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].input
    let questionResult = state.JSONSlideData[payload.currentSlideIndex].content[payload.quizIndex].quiz.questions[payload.questionsIndex].input[payload.inputIndex].result

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
  }
}
