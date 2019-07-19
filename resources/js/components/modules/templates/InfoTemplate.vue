<template>
  <div class="module-info mb-5 col-12">
    <div class="row mt-3">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h1 v-if="currentSlideData.header.title" class="module-info__header">
              {{ currentSlideData.header.title }}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="module-info__content col-12">
            <h2 class="module-info__content-text" v-if="currentSlideData.header.text" v-html="currentSlideData.header.text"></h2>
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
          <info-photo-grid
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image_grid"
            :image_grid="currentSlideData.content[`${currentSlideIndex}`].image_grid"
            :content_alignment="currentSlideData.content[`${currentSlideIndex}`].image_grid_align_content"/>
          <info-photo-list
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].photo_list"
            :listItems="currentSlideData.content[`${currentSlideIndex}`].photo_list"/>
          <info-carousel
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].carousel"
            :images="currentSlideData.content[`${currentSlideIndex}`].carousel"/>
          <info-list
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].list_element"
            :listItems="currentSlideData.content[`${currentSlideIndex}`].list_element"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import InfoParagraph from './info/InfoParagraph'
import InfoCarousel from './info/InfoCarousel'
import InfoPhoto from './info/InfoPhoto'
import InfoPhotoGrid from './info/infoPhotoGrid'
import InfoList from './info/InfoList'
import InfoPhotoList from './info/InfoPhotoList'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoCarousel,
    InfoParagraph,
    InfoPhoto,
    InfoPhotoGrid,
    InfoList,
    InfoPhotoList
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
