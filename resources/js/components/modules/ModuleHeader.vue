<template>
  <header class="module__header">
    <loading-progress class="module__progressBar"
      :progress="latestSlideNumber/(totalSlides - 1)"
      :size="getProgressBarSize"
      :shape="module.shape"
      :height="getProgressBarHeight"
      :width="getProgressBarSize"
    />
    <h1 class="module__progress" style="color: black">{{ Math.floor((latestSlideNumber/(totalSlides - 1)) * 100) }}% </h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'size_of_container'
  ],

  data () {
    return {
      windowWidth: 0,
      module: {
        shape: 'line',
        height: 26,
        color: 'green'
      }
    }
  },

  created () {
    window.addEventListener('resize', this.resizeWidth)
    this.resizeWidth()
  },

  mounted () {
    window.onresize = () => {
      this.getContainerSize = this.size_of_container
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
    ),

    getProgressBarSize () {
      if (this.size_of_container < 720) {
        return this.windowWidth
      } else {
        return this.getContainerSize
      }
    },

    getProgressBarHeight () {
      if (this.size_of_container < 720) {
        return this.module.height
      } else {
        return 30
      }
    },

    getContainerSize () {
      return this.size_of_container
    }
  },

  methods: {
    resizeWidth () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
