<template>
  <div class="col-sm-5 col-12">
    <div v-on:click="newSlide()" :class="disableBlockSelection" class="module-quiz__option">
      <div v-if="displayContent && selectedCard > 0" class="transition-350ms module-quiz__selection module-quiz__selection--img">
        <i v-if="optionID == answer" class="fas fa-check-circle module-quiz__icon"></i>
        <i v-else-if="selectedCard > 0" class="fas fa-times-circle module-quiz__icon"></i>
      </div>
      <div>
        <img v-if="image" class="module-quiz__img" :src="image" alt="alcohol module image">
        <p class="module-quiz__text">{{ option }}</p>
        <p class="module-quiz__answer" v-if="displayContent && selectedCard > 0">{{ correct_answer }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'quizOption',
  props: [

    'optionID',
    'image',
    'option',
    'correct_answer'
  ],
  data () {
    return {
      answer: 3,
      selectedCard: 0

    }
  },
  computed: {
    ...mapGetters(
      [
        'displayContent'
      ]
    ),
    disableBlockSelection () {
      if (this.selectedCard < 1 && this.displayContent === true) {
        return 'module-quiz__option--preventSelection'
      }
      return null
    }
  },
  methods: {
    ...mapActions(
      [
        'toggleContent'
      ]
    ),
    newSlide: function () {
      this.toggleContent(true)
      this.selectedCard++
    }
  }
}
</script>
