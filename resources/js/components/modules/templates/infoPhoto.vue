<template>
  <div :class="determineColSize">
    <img class="module-info__img" :src="image" alt="">
  </div>
</template>
<script>
export default {
  name: 'infoPhoto',
  props: [
    'image',
    'imageSize'
  ],
  computed: {
    determineColSize() {
      if (this.imageSize === 3) {
        return 'col-4'
      }
      if (this.imageSize === 2) {
        return 'col-6'
      }
      if (this.imageSize === 1) {
        return 'col-12'
      }
    }
  }
}
</script>
