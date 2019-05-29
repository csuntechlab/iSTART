<template>
  <div class="mb-4 ml-1 col-11">
      <p>{{ questionIndex }}. {{ question }} </p>
      <input id="response" name="response" v-model="response" type="number" min="0" max="100" v-if="needInputLabel === true" @blur="validateInput($event)" class="module-quizInput__label"/>
      <p class="module-quizInput__validate module-quizInput__validate--red" v-if="isInputValid === false"> Your response must range from: 0 - 100</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'quizInput',
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
        'slideNumber',
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'getUserResponses',
        'allowUserToContinue'
      ]
    ),
    validateInput($event){
      var enteredValue = $event.target.value.replace(/^[0-9\s\+]+$/,'')
      if (enteredValue === '') {
        this.storeInputIntoState()
      } else {
        this.isInputValid = false
        this.getUserResponses({index: this.questionIndex - 1, response: $event.target.value, valid: this.isInputValid})
      }
    },
    storeInputIntoState () {
      this.parseResponse = parseInt(this.response)
      if (this.parseResponse !== null && Number.isInteger(this.parseResponse) && this.parseResponse > -1 && this.parseResponse < 101) {
        this.isInputValid = true
        this.getUserResponses({ index: this.questionIndex - 1, response: this.parseResponse, valid: this.isInputValid })
      }
    },
  }
}
</script>
