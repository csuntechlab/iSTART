<template>
  <div class="col-sm-6 col-12">
    <div v-if="image" v-on:click="newSlide()" class="module-quiz__option module-quiz__option--img">
      <div v-if="getAccessToDisplayContent && optionID == answer" class="module-quiz__selection--img">
        <i class="fas fa-check-circle module-quiz__icon"></i>
      </div>
      <div v-else-if="getAccessToDisplayContent && selectedCard > 0" class="module-quiz__selection--img">
        <i class="fas fa-times-circle module-quiz__icon"></i>
      </div>
      <img class="module-quiz__img" :src="image" alt="alcohol module imgae">
      <p class="module-quiz__text">Option {{ optionID }}: Lorem, ipsum dolor sit amet consectetur</p>
    </div>
    <div v-else v-on:click="newSlide()" class="module-quiz__option">
      <div v-if="getAccessToDisplayContent && optionID == answer" class="module-quiz__selection">
        <i class="fas fa-check-circle module-quiz__icon"></i>
      </div>
      <div v-else-if="getAccessToDisplayContent && selectedCard > 0" class="module-quiz__selection">
        <i class="fas fa-times-circle module-quiz__icon"></i>
      </div>
      <img class="module-quiz__img" :src="image" alt="alcohol module imgae">
      <p class="module-quiz__text">Option {{ optionID }}: Lorem, ipsum dolor sit amet consectetur adipisicing elitfficiis! Consequuntur,  </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'quizOption',
  props: [

    'optionID',
    'image'
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
