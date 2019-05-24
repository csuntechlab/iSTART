<template>
  <div class="mb-4 ml-1 col-11">
    <p>{{ questionIndex }}. {{ question }} </p>
    <input id="response" name="response" v-model="response" type="number" min="0" max="100" v-if="needInputLabel === true" @keydown.tab="userHasEnteredData"  class="module-quizInput__label"/>
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
      current_slide_number: 0,
      hasUserEnteredDataProperly: null
    }
  },
  computed: {
    ...mapGetters(
      [
        'amountOfResponses',
        ''
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
      console.log(typeof (parseResponse))
      if (typeof (parseResponse) === 'number' && parseResponse > -1 && parseResponse < 100) {
        this.hasUserEnteredDataProperly = true
        if (this.amountOfResponses <= this.questionLength - 1) {
          this.getUserResponses({ responses: parseResponse, counter: this.counter += 1 })
        }
        if (this.amountOfResponses === this.questionLength) {
          let payload = {
            isAbleToProceed: true,
            slide_index: this.current_slide_number += 1,
            slide_type: 'pie'
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
