<template>
  <header class="module__progressBarWrapper">
    <loading-progress class="module__progressBar"
      :progress="(latestSlideNumber / (totalSlides - 1))"
      :shape="module.shape"
      :height="module.height"
      :size="module.width"
      :width="module.width"
    />
    <p class="module__percentage">
      <span class="sr-only">Module</span>
      {{ Math.round(((latestSlideNumber / (totalSlides - 1)) * 100).toFixed(2)) }}%
      <span class="sr-only">Complete</span>
    </p>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      module: {
        shape: 'line',
        height: 30,
        width: 0
      }
    }
  },

  created () {
    this.getWidth()
    window.addEventListener('resize', this.resizeWidth)
  },

  mounted () {
    this.getWidth()
    window.onresize = () => {
      this.getWidth()
    }
  },

  destroyed () {
    window.removeEventListener('resize', this.resizeWidth)
  },

  computed: {
    ...mapGetters(
      [
        'latestSlideNumber',
        'totalSlides'
      ]
    )
  },

  methods: {
    getWidth () {
      let getWidth = document.querySelector('.navbar')
      this.module.width = getWidth.clientWidth
    }
  }

}
</script>
