<template>
  <div class="introSlide col-12">
    <div class="row introSlide__image-container" :style="'background-image: url(' + currentSlideData.content.background_image + ')'">
    </div>
    <div class="row introSlide__content-wrapper">
      <div class="introSlide__title-container col-12 col-lg-4">
        <h1 class="introSlide__title">
          {{currentSlideData.content.title}}
        </h1>
      </div>
      <div class="col-12 col-lg-8">
        <p class="introSlide__description">
          <strong>Goal: </strong>
          {{currentSlideData.content.goal}}
        </p>
        <p class="introSlide__description">
          <strong>Definition: </strong>
          {{currentSlideData.content.definition}}
        </p>
        <p class="introSlide__description">Estimated Completion time: {{currentSlideData.content.estimated_completion}}</p>
        <button @click="goForward" class="btn introSlide__start-btn">
          Start
        </button>
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

  mounted () {
    window.scrollTo(0, 0)
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
