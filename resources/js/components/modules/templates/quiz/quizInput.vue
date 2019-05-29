<template>
  <div class="mb-4 ml-1 col-11">
    <form>
      <p>{{ questionIndex }}. {{ question }} </p>
      <input id="response" name="response" v-model="response" type="number" min="0" max="100" v-if="needInputLabel === true" v-on:blur="isEnteredValueCorrect; test($event)" class="module-quizInput__label"/>
      <p class="module-quizInput__validate module-quizInput__validate--red" v-if="hasUserEnteredDataProperly === false"> Your response must range from: 0 - 100 </p>
    </form>
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
      response: this.user_response,
      counter: 0,
      responseCounter: 0,
      current_slide_number: 0,
      hasUserEnteredDataProperly: null,
      parseResponse: null
    }
  },

  computed: {
    ...mapGetters(
      [
        'userResponses',
        'slideNumber',
        'quizInputCount'
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
    test($event){
      console.log(typeof($event.target.value))
      var tempVal = $event.target.value.replace(/^[0-9\s\+]+$/,'')
      console.log(tempVal)
    },
    isEnteredValueCorrect(){
      this.response.replace('^[1-9][0-9]{0,2}$')
      this.userHasEnteredData()
    },
    userHasEnteredData () {
      this.parseResponse = parseInt(this.response)
      if (this.parseResponse !== null && typeof (this.parseResponse) === 'number' && this.parseResponse > -1 && this.parseResponse < 101) {
        this.hasUserEnteredDataProperly = true
        this.getUserResponses({ index: this.questionIndex - 1, responses: this.parseResponse, counter: this.responseCounter += 1 })
        if (this.quizInputCount === this.questionLength && this.parseResponse !== null && this.parseResponse > -1 && this.parseResponse < 100 && typeof (this.parseResponse) === 'number' && this.hasUserEnteredDataProperly === true) {
          let payload = {
            isAbleToProceed: true,
            slide_index: this.slideNumber
          }
          this.allowUserToContinue(payload)
        } else {
          this.getUserResponses({ index: this.questionIndex - 1, responses: undefined, counter: this.responseCounter -= 1 })
        }
      } else {
        this.hasUserEnteredDataProperly = false
      }
    }
  }
}
</script>
