<template>
  <div class="module-info mb-5 col-12">
    <div class="row mt-3">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h1 v-if="currentSlideData.header.header && currentSlideData.header.header !== null" class="module-info__header module-text__header">
              {{ currentSlideData.header.header }}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="module-info__content col-12">
            <h2 class="module-text__text" v-if="currentSlideData.header.sub_header && currentSlideData.header.sub_header !== null" v-html="currentSlideData.header.sub_header"></h2>
          </div>
        </div>
        <template v-for="(element, currentSlideIndex) in currentSlideData.content">
          <info-paragraph
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].paragraph"
            :paragraph="currentSlideData.content[`${currentSlideIndex}`].paragraph"/>
          <info-photo
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image"
            :image="currentSlideData.content[`${currentSlideIndex}`].image"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'

import InfoParagraph from './info/InfoParagraph'
import InfoPhoto from './info/InfoPhoto'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoParagraph,
    InfoPhoto
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
