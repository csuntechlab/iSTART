<template>
  <div class="col-sm-6 offset-2 offset-sm-0 col-12">
    <div class="module-quiz__option">
      <div class="module-quiz__selection">
        <i class="fas fa-check-circle module-quiz__icon"></i>
      </div>
      <p v-on:click="newSlide()" class="module-quiz__text">Option {{ option_number }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'quizOption',
  props: [
    'option_number'
  ],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(
      ['changeSlide']
    ),
    newSlide: function () {
      this.changeSlide()
    }
  }
}
</script>
