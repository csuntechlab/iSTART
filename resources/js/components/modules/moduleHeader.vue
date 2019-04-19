<template>
  <div class="module__header">
    <loading-progress class="module__progressBar"
      :progress="module.progress"
      :size="size_of_container !== undefined ? getContainerSize : windowWidth"
      :shape="module.shape"
      :height="module.height"
      :width="size_of_container !== undefined ? getContainerSize : windowWidth"
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
      w: this.getContainerSize,
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
    }
  },
  mounted () {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.w = this.getCOntainerSize
    }
  }
}
</script>
