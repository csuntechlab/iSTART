<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header"> {{ current_slide(slideNumber).header.title }}</h1>
        </div>
        <div class="module-info__content col-12">
          <p v-if="current_slide(slideNumber).header.text"> {{ current_slide(slideNumber).header.text }}</p>
          <info-photo v-for="(element, index) in current_slide(slideNumber).content.images"
            :key="index"
            :image="element"
            :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
          </info-photo>
          <info-content v-for="(element, index) in current_slide(slideNumber).content.paragraph"
            :key="`${index}-${element.id}`"
            :paragraph="element"
            :icon="element.icon">
          </info-content>
          <info-carousel v-if="current_slide(slideNumber).format ==='carousel'" :images="current_slide(slideNumber).content.carousel"></info-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import InfoContent from './info/InfoContent'
import InfoCarousel from './info/InfoCarousel'
import InfoPhoto from './info/InfoPhoto'

export default {
  components: {
    InfoCarousel,
    InfoContent,
    InfoPhoto
  },

  watch: {
    slideNumber (newValue, old) {
      if (this.mountedCounter >= 1 && this.slideNumber > -1 && this.slideNumber < Object.keys(this.slides).length - 1) {
        this.proceedAndContinue()
      }
    }
  },

  mounted () {
    if (this.mountedCounter < 1) {
      this.proceedAndContinue()
    }
  },

  computed: {
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),
    ...mapGetters(
      [
        'current_slide'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),
    proceedAndContinue () {
      this.mountedCounter += 1
      setTimeout(function () { this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber }) }.bind(this), 5000)
    }
  },

  data () {
    return {
      mountedCounter: 0
    }
  }
}
</script>
