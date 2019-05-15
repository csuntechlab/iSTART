<template>
  <div class="col-12">
    <h1> {{ question }} </h1>
    <input v-model="response" type="text"/>
  </div>
</template>
<script>
export default {
  name: 'quizSurveyQuestion',
  props: [
    'question'
  ],
  data () {
    return {
      response: null
    }
  }
}
</script>
