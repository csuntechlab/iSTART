<template>
  <div class="mb-4 ml-1 col-11">
    <p>{{ questionIndex }}. {{ question }} </p>
    <input :disabled="responseCounter > 0" id="response" name="response" v-model="response" type="number" min="0" max="100" v-if="needInputLabel === true" v-on:blur="userHasEnteredData" class="module-quizInput__label"/>
    <p class="module-quizInput__validate module-quizInput__validate--red" v-if="hasUserEnteredDataProperly === false"> You must enter your respones in numbers from: 0 - 100 </p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
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
      response: null,
      counter: 0,
      responseCounter: 0,
      current_slide_number: 0,
      hasUserEnteredDataProperly: null
    }
  },
  computed: {
    ...mapGetters(
      [
        'userResponses',
        'slideNumber'
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
    userHasEnteredData () {
      var parseResponse = parseInt(this.response)
      if (parseResponse !== null && typeof (parseResponse) === 'number' && parseResponse > -1 && parseResponse < 100) {
        this.hasUserEnteredDataProperly = true
        this.getUserResponses({ index: this.questionIndex - 1, responses: parseResponse, counter: this.responseCounter += 1 })
        if (this.userResponses.length === this.questionLength) {
          let payload = {
            isAbleToProceed: true,
            slide_index: this.slideNumber
          }
          this.allowUserToContinue(payload)
        }
      } else {
        this.hasUserEnteredDataProperly = false
      }
    }
  }
}
</script>
