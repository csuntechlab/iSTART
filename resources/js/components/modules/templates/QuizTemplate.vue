<template>
  <div class="module-quiz">
    <div class="row">
      <div class="col-12">
        <h1 class="module-quiz__header-font">{{ currentSlideData.header.title }}</h1>
      </div>
    </div>
    <div class="col-12">
      <p v-if="currentSlideData.header.text"> {{ currentSlideData.header.text }}</p>
      <info-photo v-for="(element, id) in currentSlideData.content.images"
        :key="`${id}-${element.id}`"
        :image="element"
        :imageCount="Object.keys(currentSlideData.content.images).length">
      </info-photo>
      <quiz-question  v-for="(element, id) in currentSlideData.content.questions"
        :object="element"
        :options="element.options"
        :answer="element.answer"
        :index="id"
        :key="id">
      </quiz-question>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuizQuestion from './quiz/QuizQuestion'
import InfoPhoto from './info/InfoPhoto'

export default {
  components: {
    QuizQuestion,
    InfoPhoto
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData'
      ]
    )
  }
}
</script>
