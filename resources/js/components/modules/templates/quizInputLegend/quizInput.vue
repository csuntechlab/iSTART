<template>
  <div class="mb-4 ml-1 col-11">
    <p> {{ question }} </p>
    <input v-model="user_response" class="module-quizInput__label" type="text"/>
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
      response: null
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
