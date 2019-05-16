<template>
  <div class="container">
    <div class="row">
      <pie></pie>
    </div>
    <div class="row">
      <quiz-survey-question v-for="(element, index) in slides.questions"
        :key="index"
        :question="element"
        ></quiz-survey-question>
    </div>
  </div>
</template>
<script>
import { Pie } from 'vue-chartjs'
import quizSurveyQuestion from './quizSurvey/quizSurveyQuestion'
export default {
  extends: Pie,
  name: 'quizSurveyTemplate',
  components: {
    quizSurveyQuestion
  },
  data () {
    return {
      slides: {
        questions: {
          0: '1. What percent of female US College Students drink MORE than you in a typical week?',
          1: '2. What percent of CSUN students used alcohol within the last 30 days?',
          2: '3. What percent of female US College Students drink MORE than you in a typical week?',
          3: '4. What percent of female US College Students drink MORE than you in a typical week?'
        }
      }
    }
  }
}
</script>
