<template>
  <div class="module-quizInput mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <template v-for="(element, index) in questions">
          <div :key="index" class="col-12 mt-5 mb-2">
            <p class="module-quizInput__text">{{ element }}</p>
          </div>
          <div :key="index + '-chart1'" class="col-6 mt-1">
            <quiz-legend chart-id="one"
              :response="userResponses[index]"
              :sources="sources[index]"
            ></quiz-legend>
          </div>
          <div :key="index + '-chart2'" class="col-6 mt-1">
            <quiz-legend chart-id="two"
              :response="userResponses[index]"
              :sources="sources[index]"
            ></quiz-legend>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import quizLegend from './../templates/quiz/quizLegend'
export default {
  name: 'pieChartTemplate',
  components: {
    quizLegend
  },
  data () {
    return {
      windowWidth: 0,
      questions: {
        0: '1. What percent of female US College Students drink MORE than you in a typical week?',
        1: '2. What percent of CSUN students used alcohol within the last 30 days?',
        2: '3. What percent of CSUN students have never used alcohol?',
        3: '4. What percent of CSUN students used marijuana within the last 30 days?'
      },
      sources: [39, 45, 32, 85]
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
