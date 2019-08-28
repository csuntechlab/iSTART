<template>
  <header class="module__progressBarWrapper">
    <loading-progress class="module__progressBar"
      :progress="latestSlideNumber/(totalSlides - 1)"
      :shape="module.shape"
      :height="module.height"
      :size="module.width"
      :width="module.width"
    />
    <p class="module__percentage">
      {{ Math.floor((latestSlideNumber/(totalSlides - 1)) * 100) }}%
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
    let getWidth = document.querySelector('.navbar')
    this.module.width = getWidth.clientWidth
    window.addEventListener('resize', this.resizeWidth)
  },

  mounted () {
    window.onresize = () => {
      let getWidth = document.querySelector('.navbar')
      this.module.width = getWidth.clientWidth
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
  }

}
</script>
