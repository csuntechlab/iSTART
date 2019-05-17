<template>
  <div class="module-quizInputLegened">
    <div class="container">
      <div v-if="!displayContent" class="row mt-5 mb-5">
        <quiz-input v-for="(element, index) in slides.questions"
          :key="index"
          :questionIndex="parseInt(index)+1"
          :question="element.question"
          :user_response="element.response"
          :questionLength="Object.keys(slides.questions).length"
          ></quiz-input>
      </div>
      <div class="row mt-5 mb-5 justify-content-center">
        <div v-if="displayContent" class="col-6 col-md-12">
          <quiz-legend v-for="(element, index) in userResponses"
            :height="250"
            :width="250"
            :key="index"
            :response="element"
          ></quiz-legend>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import quizInput from './quizInputLegend/quizInput'
import quizLegend from './quizInputLegend/quizLegend'
import { mapGetters } from 'vuex'
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
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          1: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          2: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          3: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(
      [
        'displayContent',
        'userResponses'
      ]
    )
  }
}
</script>
