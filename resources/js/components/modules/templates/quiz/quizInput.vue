<template>
  <div class="mb-4 ml-1 col-11">
    <p>{{ questionIndex }}. {{ question }} </p>
    <input v-if="needInputLabel === true" @keydown.tab="userHasEnteredData" v-model="response" class="module-quizInput__label" type="text"/>
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
      current_slide_number: 0
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
      if (this.response) {
        if (this.amountOfResponses <= this.questionLength - 1) {
          this.getUserResponses({ responses: this.response, counter: this.counter += 1 })
        }
        if (this.amountOfResponses === this.questionLength) {
          let payload = {
            isAbleToProceed: true,
            slide_index: this.current_slide_number += 1,
            slide_type: 'pie'
          }
          this.allowUserToContinue(payload)
        }
      }
    }
  }
}
</script>
