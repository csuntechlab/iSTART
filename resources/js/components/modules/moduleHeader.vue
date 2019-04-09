<template>
  <loading-progress class="module__header"
    :progress="module.progress"
    :size="module.size"
    :shape="module.shape"
  />
</template>
<script>
export default {
  name: 'moduleHeader',
  data () {
    return {
      module: {
        size: 100,
        shape: 'line',
        progress: 0.59
      }
    }
  }
}
</script>
