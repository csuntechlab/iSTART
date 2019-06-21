<template>
  <div class="module-quizInput mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <template v-for="(element, index) in getSlideData(currentSlideNumber-1).content.questions">
          <div :key="index" class="col-12 mt-5 mb-2">
            <p class="module-quizInput__text">{{ element.question }}</p>
          </div>
          <div :key="index + '-chart1'" class="col-6 mt-1">
            <input-pie-chart-legend chart-id="one"
              :response="userResponses(index)"
              :sources="element.answer">
            </input-pie-chart-legend>
          </div>
          <div :key="index + '-chart2'" class="col-6 mt-1">
            <input-pie-chart-legend chart-id="two"
              :response="userResponses(index)"
              :sources="element.answer">
            </input-pie-chart-legend>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import InputPieChartLegend from './../templates/input/InputPieChartLegend'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InputPieChartLegend
  },

  computed: {
    ...mapGetters(
      [
        'userResponses',
        'getSlideData',
        'currentSlideNumber'
      ]
    )
  }
}
</script>
