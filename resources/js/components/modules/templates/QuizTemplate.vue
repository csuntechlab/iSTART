<template>
  <div class="module-quiz">
    <div class="row">
      <div class="col-12">
        <h1 class="module-quiz__header-font">{{ current_slide(slideNumber).header.title }}</h1>
      </div>
    </div>
    <div class="row">
      <p v-if="current_slide(slideNumber).header.text"> {{ current_slide(slideNumber).header.text }}</p>
      <info-photo v-for="(element, id) in current_slide(slideNumber).content.images"
        :key="`${id}-${element.id}`"
        :image="element"
        :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
      </info-photo>
      <quiz-question  v-for="(element, id) in current_slide(slideNumber).content.questions"
        :object="element"
        :options="element.options"
        :slideNumber="slideNumber"
        :index="id"
        :key="id">
      </quiz-question>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import QuizQuestion from './quiz/QuizQuestion'
import InfoPhoto from './info/InfoPhoto'

export default {
  components: {
    QuizQuestion,
    InfoPhoto
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
        'current_slide'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    )
  }
}
</script>
