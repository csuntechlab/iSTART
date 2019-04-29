<template>
  <div class="col-sm-5 offset-2 offset-sm-0 col-12">
    <p v-on:click="newSlide()" class="module-quiz__option">Option {{ option_number }}</p>
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
