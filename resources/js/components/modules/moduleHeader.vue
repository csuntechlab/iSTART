<template>
  <div class="module__header">
    <loading-progress class="module__progressBar"
      :progress="module.progress"
      :size="getContainerSize <= 720 ? windowWidth : getContainerSize"
      :shape="module.shape"
      :height="module.height"
      :width="getContainerSize <= 720 ? windowWidth : getContainerSize"
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
      w: this.size_of_container,
      windowWidth: window.innerWidth,
      module: {
        shape: 'line',
        progress: 0.59,
        height: 26
      }
    }
  },
  computed: {
    getContainerSize () {
      return this.size_of_container
    },
    getWindowWidth () {
      return this.windowWidth
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
