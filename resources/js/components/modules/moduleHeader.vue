<template>
  <div class="module__header">
    <loading-progress class="module__progressBar"
      :progress="module.progress"
      :size="module.size"
      :shape="module.shape"
      :height="module.height"
      :width="windowWidth"
    />
    <h1 class="module__progress">{{ module.progress* 100}}% </h1>
  </div>
</template>
<script>
export default {
  name: 'moduleHeader',
  data () {
    return {
      windowWidth: window.innerWidth,
      module: {
        shape: 'line',
        progress: 0.59,
        height: 26,
        size: window.innerWidth
      }
    }
  },
  mounted () {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
