<template>
  <div class="module-quizInputLegened">
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
      <div class="row mt-5 mb-5 justify-content-center">
        <div class="col-6 col-md-12">
          <quiz-input v-for="(element, i) in questions"
            :key="i"
            :question="element"
            :questionIndex="parseInt(i)+1"
            :needInputLabel="false"
          ></quiz-input>
          <quiz-legend v-for="(element, index) in userResponses"
            :height="250"
            :width="250"
            :key="index"
            :response="element"
            :question="questions[index]"
          ></quiz-legend>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import quizInput from './../templates/quiz/quizInput'
import quizLegend from './../templates/quiz/quizLegend'
export default {
  name: 'pieChartTemplate',
  components: {
    quizLegend,
    quizInput
  },
  data () {
    return {
      questions: {
        0: '1. What percent of female US College Students drink MORE than you in a typical week?',
        1: '2. What percent of CSUN students used alcohol within the last 30 days?',
        2: '3. What percent of CSUN students have never used alcohol?',
        3: '4. What percent of CSUN students used marijuana within the last 30 days?'
      }
    }
  },
  computed: {
    ...mapGetters(
      [
        'userResponses'
      ]
    )
  }

}
</script>
