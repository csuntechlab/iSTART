<template>
  <div class="module-quiz">
    <div class="row">
      <div class="col-12">
        <h1 class="module-quiz__header-font">{{ current_slide(slideNumber).header.title }}</h1>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">

      <quiz-option  v-for="(element, id)  in current_slide(slideNumber).content.questions"
        :image="element.image"
        :option="element.option"
        :correct_answer="element.correct_answer"
        :key="id"
        :optionID="id">
      </quiz-option>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import QuizOption from './quiz/QuizOption'

export default {
  components: [
    QuizOption
  ],

  computed: {
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),
    ...mapGetters(
      [
        'current_slide'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),

    proceedAndContinue () {
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    }
  }
}
</script>
