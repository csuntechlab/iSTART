<template>
  <div class="module-quizInputLegened">
    <div class="container">
      <div class="row justify-content-center">
        <div v-if="slides.questions.length == 4" class="col-6 col-md-12">
          <quiz-legend v-for="(element, index) in slides.questions"
            :height="250"
            :width="250"
            :key="index"
          ></quiz-legend>
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
  </div>
</template>
<script>
import quizInput from './quizInputLegend/quizInput'
import quizLegend from './quizInputLegend/quizLegend'
export default {
  name: 'quizInputLegend',
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
