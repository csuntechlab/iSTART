<template>
  <div>
    <div class="multi-quiz__question module-text__question">{{ quiz.question }}</div>
    <div class="multi-quiz-container">
      <div class="multi-quiz__input-container col-12 col-sm-6" v-for="(element, index) in quiz.input" :key="`${index}`">
        <div @click="enableContinue" class="multi-quiz__input module-text__text interactable-container">
          {{ element.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'quiz'
  ],
  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'currentSlideIndex'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'enableContinue'
      ]
    )
  }
}
</script>
