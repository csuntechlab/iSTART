<template>
  <div class="col-sm-6 col-12">
    <div v-on:click="newSlide()" class="module-quiz__option module-quiz__option--img">
      <div v-if="getAccessToDisplayContent && optionID == answer" class="module-quiz__selection module-quiz__selection--img">
        <i class="fas fa-check-circle module-quiz__icon"></i>
      </div>
      <div v-else-if="getAccessToDisplayContent && selectedCard > 0" class="module-quiz__selection module-quiz__selection--img">
        <i class="fas fa-times-circle module-quiz__icon"></i>
      </div>
      <img v-if="image" class="module-quiz__img" :src="image" alt="alcohol module imgae">
      <p class="module-quiz__text">{{ option }}</p>
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
    'option'
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
        'getAccessToDisplayContent'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'changeSlide'
      ]
    ),
    newSlide: function () {
      this.changeSlide()
      this.selectedCard++
    }
  }
}
</script>
