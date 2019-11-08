<template>
  <li class="pb-4 col-12">
      <p class="module-text__text"> {{ question }}</p>
      <label class="d-none" :for="'question_' + questionIndex">Input a percentage for {{ question }}</label>
      <input :id="'question_' + questionIndex" name="response" type="text" @keyup="validateInput(questionIndex); validateForm()" class="module-quizInput__label"/><span class="module-quizInput__percent-indicator">%</span>
      <em class="module-quizInput__validate module-quizInput__validate--red" v-if="hasAnswered && !isValidated">Your response must range from: 0 - 100</em>
  </li>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'totalQuestions',
    'questionIndex',
    'question',
    'userResponse',
    'object'
  ],

  mounted () {
    console.log(this.object, this.iteration)
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
        'disableContinue'
      ]
    ),

    validateInput (questionIndex) {
      console.log('validateInput', questionIndex)
    },

    validateForm () {
      console.log('validateForm')
    }
  }
}
</script>
