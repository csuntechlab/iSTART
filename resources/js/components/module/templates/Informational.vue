<template>
  <div class="module-info col-12">
    <div class="row">
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
          <paragraph
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].paragraph"
            :paragraph="currentSlideData.content[`${currentSlideIndex}`].paragraph"/>
          <photo
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image"
            :image="currentSlideData.content[`${currentSlideIndex}`].image"/>
          <photo-grid
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image_grid"
            :image_grid="currentSlideData.content[`${currentSlideIndex}`].image_grid"
            :content_alignment="currentSlideData.content[`${currentSlideIndex}`].image_grid_align_content"/>
          <list
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].list_element"
            :listItems="currentSlideData.content[`${currentSlideIndex}`].list_element"/>
          <list-photo
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].photo_list"
            :listItems="currentSlideData.content[`${currentSlideIndex}`].photo_list"/>
          <carousel
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].carousel"
            :images="currentSlideData.content[`${currentSlideIndex}`].carousel"/>
          <video-playback
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].video"
            :video="currentSlideData.content[`${currentSlideIndex}`].video"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import Paragraph from './shared/Paragraph'
import Photo from './shared/Photo'
import PhotoGrid from './shared/PhotoGrid'
import List from './shared/List'
import ListPhoto from './shared/ListPhoto'
import Carousel from './shared/Carousel'
import VideoPlayback from './shared/VideoPlayback'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    Paragraph,
    Photo,
    PhotoGrid,
    List,
    ListPhoto,
    Carousel,
    VideoPlayback
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
