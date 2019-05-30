<template>
  <div class="module__header">
    <loading-progress class="module__progressBar"
      :progress="module.progress"
      :size="getProgressBarSize"
      :shape="module.shape"
      :height="getProgressBarHeight"
      :width="getProgressBarSize"
    />
    <h1 class="module__progress">{{ module.progress* 100}}% </h1>
  </div>
</template>
<script>
export default {
  name: 'moduleHeader',
  props: [
    'size_of_container'
  ],
  data () {
    return {
      windowWidth: 0,
      module: {
        shape: 'line',
        progress: 0.59,
        height: 26
      }
    }
  },
  created () {
    window.addEventListener('resize', this.resizeWidth)
    this.resizeWidth()
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeWidth)
  },
  computed: {
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
  },
  mounted () {
    window.onresize = () => {
      this.getContainerSize = this.size_of_container
    }
  }
}
</script>
