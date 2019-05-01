<template>
  <div class="col-sm-6 col-12">
    <div v-on:click="newSlide()" class="module-quiz__option">
      <div v-if="getAccessToDisplayContent && option_number == answer" class="module-quiz__selection">
        <i class="fas fa-check-circle module-quiz__icon"></i>
      </div>
      <p class="module-quiz__text">Option {{ option_number }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'quizOption',
  props: [
    'option_number',
    'optionID'
  ],
  data () {
    return {
      answer: 3
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
    }
  }
}
</script>
