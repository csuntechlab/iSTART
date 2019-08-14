<template>
  <div class="video-template justify-content-center mb-5 row">
    <div class="video-template__header col-12">
      <h1 class="video-template__title module-text__header">
        {{ currentSlideData.header.header }}
      </h1>
      <h2 class="module-text__sub-header">{{ currentSlideData.header.sub_header }}</h2>
    </div>
    <div class="video-template__video col-12 col-md-10">
      <div class="embed-responsive embed-responsive-16by9">
        <youtube :video-id="currentSlideData.content.video_id" player-width="100%" @ended="allowContinue" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
      </div>
    </div>
    <div class="video-template__caption col-12">
      <caption class="module-text__caption">{{ currentSlideData.content.caption }}</caption>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    setTimeout(() => {
      this.allowContinue()
    }, this.currentSlideData.content.video_length)
  },

  updated () {
    setTimeout(() => {
      this.allowContinue()
    }, this.currentSlideData.content.video_length)
  },

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
        'enableContinue'
      ]
    ),

    allowContinue () {
      this.enableContinue()
    }
  }
}
</script>
