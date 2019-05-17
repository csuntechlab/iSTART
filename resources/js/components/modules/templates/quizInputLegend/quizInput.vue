<template>
  <div class="mb-4 ml-1 col-11">
    <p>{{ questionIndex }}. {{ question }} </p>
    <input @keydown.tab="userHasEnteredData" v-model="response" class="module-quizInput__label" type="text"/>
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
    'questionIndex'
  ],
  data () {
    return {
      response: null,
      counter: 0
    }
  },
  computed: {
    ...mapGetters(
      [
        'amountOfResponses'
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
          this.allowUserToContinue(true)
        }
      }
    }
  }
}
</script>
