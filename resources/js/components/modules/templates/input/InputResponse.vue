<template>
  <li class="pb-4 col-12">
      <p class="module-text__text"> {{ question }}</p>
      <label class="d-none" :for="'response_' + questionIndex">Input a percentage for {{ question }}</label>
      <input :id="'response_' + questionIndex" name="response" v-model="response" type="text" v-if="needInputLabel === true" @keyup="validateInput($event); validateForm($event, questionIndex)" class="module-quizInput__label"/><span class="module-quizInput__percent-indicator">%</span>
      <em class="module-quizInput__validate module-quizInput__validate--red" v-if="isInputValid === false"> Your response must range from: 0 - 100</em>
  </li>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'question',
    'user_response',
    'questionLength',
    'questionIndex',
    'needInputLabel'
  ],

  data () {
    return {
      response: this.user_response,
      counter: 0,
      responseCounter: 0,
      current_slide_number: 0,
      isInputValid: null,
      parseResponse: null
    }
  },

  computed: {
    ...mapGetters(
      [
        'userResponses',
        'userValidity',
        'slideNumber'
      ]
    ),
    ...mapState(
      {
        responseFromState: state => state.Slides.responses
      }
    )
  },

  methods: {
    ...mapActions(
      [
        'enableContinue',
        'disableContinue',
        'getUserResponses'
      ]
    ),

    validateInput ($event) {
      let target = $event.target.value
      let enteredValue = target.replace(/^[0-9\\s\\+]+$/, '')

      // If input is number continue else input is invalid
      if (enteredValue === '') {
        // Check if input is NOT valid
        if (this.checkIfInputNotValid(target)) {
          this.isInputValid = false
          this.displayInputNotValid(target)
        } else {
          this.isInputValid = true
          this.storeInputIntoState()
        }
      } else {
        this.disableContinue()
        this.isInputValid = false
        this.displayInputNotValid(target)
      }
    },

    displayInputNotValid (target) {
      this.getUserResponses({ index: this.questionIndex - 1, response: target, valid: this.isInputValid })
    },

    checkIfInputNotValid (target) {
      if (this.checkIfInputNil(target) || this.checkIfInputNotInRange(target)) {
        this.disableContinue()
        return true
      } else {
        this.enableContinue()
        return false
      }
    },

    checkIfInputNil (target) {
      if (target === null || target === 'undefined' || target === '') {
        return true
      } else {
        return false
      }
    },

    checkIfInputNotInRange (target) {
      if (parseInt(target) >= 0 && parseInt(target) <= 100) {
        return false
      } else {
        return true
      }
    },

    storeInputIntoState () {
      this.parseResponse = parseInt(this.response)
      if (Number.isInteger(this.parseResponse) && this.parseResponse > -1 && this.parseResponse < 101) {
        this.getUserResponses({ index: this.questionIndex - 1, response: this.parseResponse, valid: this.isInputValid })
      }
    },

    validateForm ($event, index) {
      // Check if all inputs have been filled before checking question data
      if (index === parseInt(this.questionLength)) {
        for (let i = 0; i < this.questionLength; ++i) {
          if (this.responseFromState[i].valid === true) {
            this.enableContinue()
          } else {
            this.disableContinue()
            // If not valid, exit loop
            break
          }
        }
      } else {
        this.disableContinue()
      }
    }
  }
}
</script>
