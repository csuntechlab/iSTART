<template>
  <div class="video-template row">
    <div class="video-template__title col-12">
      <h1>Binge Drinking</h1>
    </div>
    <div class="video-template__video col-12">
      <youtube :video-id="videoId" player-width="100%" @ended="test" :player-vars="{autoplay: 1, modestbranding: 1, rel: 0, cc_load_policy: 1, controls: 0, disablekb: 1}"></youtube>
    </div>
    <div class="video-template__caption col-12">
      <caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus vitae ullamcorper fringilla. Donec consectetur neque quam.</caption>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moduleContent',

  data () {
    return {
      videoId: '5jNEVGj6gS0'
    }
  },

  methods: {
    test () {
      console.log('yes')
    }
  }
}
</script>
