<template>
  <div class="module-quizInputLegened">
    <div class="container">
      <div class="row mt-5 mb-5 justify-content-center">
        <div class="col-6 col-md-12">
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
import { mapGetters } from 'vuex'
import quizLegend from './../templates/quiz/quizLegend'
export default {
  name: 'pieChartTemplate',
  components: {
    quizLegend
  },
  data () {
    return {
      userResponse: this.userResponses
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
