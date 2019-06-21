<template>
  <div class="mb-4 ml-1 col-11">
      <p>{{ questionIndex }}. {{ question }} </p>
      <input id="response" name="response" v-model="response" type="number" min="0" max="100" v-if="needInputLabel === true" @blur="validateInput($event); validateForm($event);" class="module-quizInput__label"/>
      <em class="module-quizInput__validate module-quizInput__validate--red" v-if="isInputValid === false"> Your response must range from: 0 - 100</em>
  </div>
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
      let enteredValue = $event.target.value.replace(/^[0-9\\s\\+]+$/, '')
      if (enteredValue === '') {
        if (this.checkForEmptyInput($event)) {
          this.isInputValid = false
          this.disableContinue()
        } else {
          this.isInputValid = true
          this.storeInputIntoState()
        }
      } else {
        this.isInputValid = false
        this.getUserResponses({ index: this.questionIndex - 1, response: $event.target.value, valid: this.isInputValid })
      }
    },

    checkForEmptyInput ($event) {
      if ($event.target.value === null || $event.target.value === 'undefined' || $event.target.value === '') {
        return true
      } else {
        return false
      }
    },

    storeInputIntoState () {
      this.parseResponse = parseInt(this.response)
      if (Number.isInteger(this.parseResponse) && this.parseResponse > -1 && this.parseResponse < 101) {
        this.getUserResponses({ index: this.questionIndex - 1, response: this.parseResponse, valid: this.isInputValid })
      }
    },

    validateForm ($event) {
      // Check if all inputs have been filled before checking question data
      if (parseInt(Object.keys(this.responseFromState).length) === parseInt(this.questionLength)) {
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
    },

    allowContinue () {
      this.enableContinue()
    },

    preventContinue () {
      this.disableContinue()
    }
  }
}
</script>
