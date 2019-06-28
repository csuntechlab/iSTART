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
        <info-photo v-for="(element, index) in currentSlideData.content.images"
          :key="index"
          :image="element">
        </info-photo>
        <info-photo-grid
          v-if="currentSlideData.content.image_grid"
          :image_grid="(currentSlideData.content.image_grid)"
          :content_alignment="currentSlideData.content.image_grid_align_content"
        >
        </info-photo-grid>
        <info-content v-for="(element, index) in currentSlideData.content.paragraph"
          :key="`${index}-${element.id}`"
          :paragraph="element"
          :icon="element.icon">
        </info-content>
        <div v-if="currentSlideData.content.list">
          <h2 v-if="currentSlideData.content.list.title !== null">
            <strong>{{ currentSlideData.content.list.title }}</strong>
          </h2>
          <ul>
            <info-list v-for="(element, index) in currentSlideData.content.list.list_element"
              :key="`${index}`"
              :listItem="element">
            </info-list>
          </ul>
        </div>
        <info-photo-list
          v-if="currentSlideData.content.photo_list"
          :listItems="currentSlideData.content.photo_list"
        >
        </info-photo-list>
        <p></p>
        <info-carousel class="col-12" v-if="currentSlideData.format ==='carousel'" :images="currentSlideData.content.carousel"></info-carousel>
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
import InfoPhotoGrid from './info/infoPhotoGrid'
import InfoList from './info/InfoList'
import InfoPhotoList from './info/InfoPhotoList'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoCarousel,
    InfoContent,
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
