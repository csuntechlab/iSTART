<template>
    <div class="row">
        <div class="col-12">
          <h1>Title of Video</h1>
        </div>
        <div class="module-content col-12">
          <youtube :video-id="videoId" :width="videoWidth" @ended="test" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
        </div>
        <div class="col-12">
          <caption>Binge drinking is bad.</caption>
        </div>
    </div>
</template>

<script>
export default {
  name: 'moduleContent',

  data () {
    return {
      videoId: '5jNEVGj6gS0',
      videoWidth: '100%'
    }
  },

  methods: {
    test () {
      console.log('yes')
    }
  }
}
</script>
