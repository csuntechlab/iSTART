<template>
  <div class="mb-4 ml-1 col-11">
    <p> {{ question }} </p>
    <input v-model="response" class="module-quizSurvey__label" type="text"/>
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
