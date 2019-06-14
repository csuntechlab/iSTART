<template>
  <div class="module-quizInput mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <template v-for="(element, index) in current_slide(slideNumber-1).content.questions">
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
import { mapGetters, mapActions, mapState } from 'vuex'
import InputPieChartLegend from './../templates/input/InputPieChartLegend'

export default {
  components: {
    InputPieChartLegend
  },

  computed: {
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),

    ...mapGetters(
      [
        'userResponses',
        'slideNumber',
        'current_slide'
      ]
    )
  },

  mounted () {
    this.proceedAndContinue()
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),
    proceedAndContinue () {
      setTimeout(function () { this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber, slide_type: null }) }.bind(this), 5000)
    }
  }
}
</script>
