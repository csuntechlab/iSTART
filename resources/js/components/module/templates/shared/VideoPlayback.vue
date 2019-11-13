<template>
  <div class="video-template justify-content-center mb-5 row">
    <div class="video-template__video col-12 col-md-10 p-0">
      <div class="embed-responsive embed-responsive-16by9">
        <youtube :video-id="video.video_id" player-width="100%" @ended="allowContinue" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
      </div>
    </div>
      <div class="video-template__caption col-12">
        <caption v-if="video.caption !== null" v-html="video.caption" class="module-text__text"></caption>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'video'
  ],

  mounted () {
    setTimeout(() => {
      this.allowContinue()
    }, this.video.video_length)
  },

  updated () {
    setTimeout(() => {
      this.allowContinue()
    }, this.video.video_length)
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
