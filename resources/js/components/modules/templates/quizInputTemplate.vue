<template>
  <div class="module-quizInputLegened">
    <div class="container">
      <div class="row mt-5 mb-5">
        <quiz-input v-for="(element, index) in slides.questions"
          :key="index"
          :questionIndex="parseInt(index)+1"
          :question="element.question"
          :user_response="element.response"
          :questionLength="Object.keys(slides.questions).length"
          :needInputLabel="true"
          ></quiz-input>
      </div>
    </div>
  </div>
</template>
<script>
import quizInput from './../templates/quiz/quizInput'
import { mapGetters } from 'vuex'
export default {
  name: 'quizInputTemplate',
  components: {
    quizInput
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
