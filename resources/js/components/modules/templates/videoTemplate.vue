<template>
  <div class="video-template justify-content-center mb-5 row">
    <div class="video-template__title col-12">
      <h1>{{ current_slide(slideNumber).header.title }}</h1>
      <p>{{ current_slide(slideNumber).header.text }}</p>
    </div>
    <div class="video-template__video col-12 col-md-10">
      <div class="embed-responsive embed-responsive-16by9">
        <youtube :video-id="current_slide(slideNumber).content.video_id" player-width="100%" @ended="proceedAndContinue" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
      </div>
    </div>
    <div class="video-template__caption col-12">
      <caption>{{ current_slide(slideNumber).content.caption }}</caption>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'moduleContent',

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
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    }
  }
}
</script>
