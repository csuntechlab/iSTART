<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header">{{ current_slide(slideNumber).header.title }}</h1>
        </div>
        <div class="module-info__content col-12">
          <h2 class="module-info__content-text" v-if="current_slide(slideNumber).header.text" v-html="current_slide(slideNumber).header.text"></h2>
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
          <div v-if="current_slide(slideNumber).content.list !== null">
            <h2 v-if="current_slide(slideNumber).content.list.title !== null">
              <strong>{{ current_slide(slideNumber).content.list.title }}</strong>
            </h2>
            <ul>
              <info-list v-for="(element, index) in current_slide(slideNumber).content.list"
                :key="`${index}-${element.id}`"
                :listItem="element">
              </info-list>
            </ul>
          </div>
          <info-carousel v-if="current_slide(slideNumber).format ==='carousel'" :images="current_slide(slideNumber).content.carousel"></info-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import infoContent from './info/infoContent'
import infoCarousel from './info/infoCarousel'
import infoPhoto from './info/infoPhoto'
import infoList from './info/infoList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    infoCarousel,
    infoContent,
    infoPhoto,
    infoList
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
