<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header">{{ currentSlideData.header.title }}</h1>
        </div>
        <div class="module-info__content col-12">
          <h2 class="module-info__content-text" v-if="currentSlideData.header.text" v-html="currentSlideData.header.text"></h2>
          <info-photo v-for="(element, index) in currentSlideData.content.images"
            :key="index"
            :image="element"
            :imageCount="Object.keys(currentSlideData.content.images).length">
          </info-photo>
          <info-content v-for="(element, index) in currentSlideData.content.paragraph"
            :key="`${index}-${element.id}`"
            :paragraph="element"
            :icon="element.icon">
          </info-content>
          <div v-if="currentSlideData.content.list">
            <h2>
              <strong>{{ currentSlideData.content.list.title }}</strong>
            </h2>
            <ul>
              <info-list v-for="(element, index) in currentSlideData.content.list.list_element"
                :key="`${index}`"
                :listItem="element">
              </info-list>
            </ul>
          </div>
          <info-carousel v-if="currentSlideData.format ==='carousel'" :images="currentSlideData.content.carousel"></info-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import InfoContent from './info/InfoContent'
import InfoCarousel from './info/InfoCarousel'
import InfoPhoto from './info/InfoPhoto'
import InfoList from './info/InfoList'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoCarousel,
    InfoContent,
    InfoPhoto,
    InfoList
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData'
      ]
    )
  }
}
</script>
