<template>
  <div class="mb-4 ml-1 col-11">
    <p> {{ question }} </p>
    <input v-model="response" class="module-quizSurvey__label" type="text"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'quizInput',
  props: [
    'question',
    'user_response'
  ],
  data () {
    return {
      response: this.user_response
    }
  },
  methods: {
    ...mapActions(
      [
        'getUserResponse'
      ]
    )
  }
}
</script>
