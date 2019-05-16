<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <quiz-legend></quiz-legend>
      </div>
    </div>
    <div class="row">
      <quiz-input v-for="(element, index) in slides.questions"
        :key="index"
        :question="element.question"
        :user_response="element.response"
        ></quiz-input>
    </div>
  </div>
</template>
<script>
import quizInput from './quizInputLegend/quizInput'
import quizLegend from './quizInputLegend/quizLegend'
export default {
  name: 'quiz',
  components: {
    quizInput,
    quizLegend
  },
  data () {
    return {
      slides: {
        questions: {
          0: {
            question: '1. What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          1: {
            question: '1. What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          2: {
            question: '1. What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          3: {
            question: '1. What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          }
        }
      }
    }
  }
}
</script>
