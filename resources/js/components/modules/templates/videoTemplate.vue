<template>
  <div class="video-template justify-content-center mb-5 row">
    <div class="video-template__title col-12">
      <h1>Binge Drinking</h1>
    </div>
    <div class="video-template__video col-12 col-md-10">
      <div class="embed-responsive embed-responsive-16by9">
        <youtube :video-id="videoId" player-width="100%" @ended="newSlide" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
      </div>
    </div>
    <div class="video-template__caption col-12">
      <caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus vitae ullamcorper fringilla. Donec consectetur neque quam.</caption>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'moduleContent',

  data () {
    return {
      videoId: '5jNEVGj6gS0'
    }
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),
    newSlide: function () {
      this.allowUserToContinue(true)
    }
  }
}
</script>
