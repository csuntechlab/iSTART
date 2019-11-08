<template>
  <li class="pb-4 col-12">
      <p class="module-text__text"> {{ question }}</p>
      <label class="d-none" :for="'question_' + questionIndex">Input a percentage for {{ question }}</label>
      <input :id="'question_' + questionIndex" v-model="userInput" name="response" type="text" @keyup="checkInput(userInput, hasResponded, questionIndex); validateForm(currentSlideData.content.questions, totalQuestions)" class="module-quizInput__label"/><span class="module-quizInput__percent-indicator">%</span>
      <em class="module-quizInput__validate module-quizInput__validate--red" v-if="hasResponded && !isValidated">Your response must range from: 0 - 100</em>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'questionIndex',
    'question',
    'totalQuestions',
    'hasResponded',
    'isValidated',
    'object'
  ],

  data () {
    return {
      userInput: null
    }
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideNumber',
        'currentSlideData'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'enableContinue',
        'disableContinue',
        'updateInputToResponded',
        'updateInputValidity',
        'checkIfAllInputsValid',
        'storeUserResponse'
      ]
    ),

    // Check if user has responded to input
    checkInput (userInput, hasResponded, questionIndex) {
      let isInputEmpty = this.checkForEmptyInput(userInput)

      if (isInputEmpty) {
        this.updateInputToResponded({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          hasResponded: false
        })
        this.updateInputValidity({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          isValidated: false
        })
      } else {
        this.updateInputToResponded({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          hasResponded: true
        })
        this.validateInput(userInput, questionIndex)
      }
    },

    checkForEmptyInput (userInput) {
      if (userInput === null || userInput === 'undefined' || userInput === '') {
        return true
      } else {
        return false
      }
    },

    // Check if user input is valid
    validateInput (userInput, questionIndex) {
      let isInputValid = this.checkForInputValidity(userInput)
      if (isInputValid) {
        this.updateInputValidity({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          isValidated: true
        })
        this.storeUserResponse({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          userResponse: userInput
        })
      } else {
        this.updateInputValidity({
          currentSlideIndex: this.currentSlideNumber,
          questionIndex: questionIndex,
          isValidated: false
        })
      }
    },

    checkForInputValidity (userInput) {
      let input = userInput.replace(/^[0-9\\s\\+]+$/, '')
      if (input === '') {
        return this.checkIfInputWithinRange(userInput)
      } else {
        return false
      }
    },

    checkIfInputWithinRange (userInput) {
      if (userInput >= 0 && userInput <= 100) {
        return true
      } else {
        return false
      }
    },

    // Check if all inputs on form are valid
    validateForm (questions, totalQuestions) {
      for (let i = 0; i < totalQuestions; i += 1) {
        let isValidInput = questions[i].isValidated
        if (!isValidInput) {
          this.disableContinue()
          break
        } else {
          this.enableContinue()
        }
      }
    }
  }
}
</script>
