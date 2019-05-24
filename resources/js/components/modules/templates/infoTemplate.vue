<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header"> {{ current_slide(slideNumber).header.title }}</h1>
          <p v-if="current_slide(slideNumber).header.text"> {{ current_slide(slideNumber).header.text }}</p>
        </div>
      </div>
      <div v-if="current_slide(slideNumber).content.images && current_slide(slideNumber).format.images ==='top'" class="row mt-3 justify-content-md-center">
        <info-photo v-for="(element, index) in current_slide(slideNumber).content.images"
          :image="element"
          :key="index"
          :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
        </info-photo>
      </div>
      <div class="row mt-3">
        <div v-if="current_slide(slideNumber).content.paragraph" class="col-12">
          <info-content v-for="(element, index) in current_slide(slideNumber).content.paragraph"
            :key="index"
            :paragraph="element"
            :icon="element.icon">
          </info-content>
        </div>
      </div>
      <div v-if="current_slide(slideNumber).format.images && current_slide(slideNumber).format.images ==='bottom'" class="row mt-3 justify-content-md-center">
        <info-photo v-for="(element, index) in current_slide(slideNumber).content.images"
          :image="element"
          :key="index"
          :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
        </info-photo>
      </div>
    </div>
  </div>
</template>
<script>
import infoContent from './info/infoContent'
import infoPhoto from './info/infoPhoto'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    infoContent,
    infoPhoto
  },
  data () {
    return {
      mountedCounter: 0
    }
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
      setTimeout(function () { this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber, slide_type: null }) }.bind(this), 5000)
    }
  }
}
</script>
