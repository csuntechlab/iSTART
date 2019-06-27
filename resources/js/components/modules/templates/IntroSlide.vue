<template>
  <div class="introSlide">
    <div class="row introSlide__image-container">
      <div class="col-12 p-0">
        <img class="introSlide__image" v-bind:src="currentSlideData.moduleImage">
      </div>
    </div>
    <div class="row introSlide__content-wrapper">
      <div class="introSlide__title-container col-12 col-md-3">
        <h1 class="introSlide__title">{{currentSlideData.moduleTitle}}</h1>
        <button @click="goForward" class="btn btn-primary introSlide__start-btn">Start</button>
      </div>
      <div class="col-12 col-md-8">
        <p class="introSlide__description mb-2">
          <strong>Goal: </strong>
          {{currentSlideData.goal}}
        </p>
        <p class="introSlide__description mb-2">
          <strong>definition: </strong>
          {{currentSlideData.definition}}
        </p>

        <p class="introSlide__description">Estimated Completion time: {{currentSlideData.estimatedCompletion}}</p>
      </div>
      <div class="row introSlide__button-wrapper">
        <div class="col-12 p-0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      [
        'currentSlideData'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'navigateFromSlide'
      ]
    ),

    goForward () {
      this.navigateFromSlide('forward')
    }
  }

}
</script>
