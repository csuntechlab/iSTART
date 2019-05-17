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
    'imageCount'
  ],
  computed: {
    determineColSize: function () {
      if (this.imageCount > 2) {
        return 'col-lg-4 col-md-6 col-12'
      } else if (this.imageCount === 2) {
        return 'col-lg-6 col-12'
      } else {
        return 'col-12'
      }
      if (this.imageCount > 3) {
        return 'col-12 col-md-6'
      }
    }
  }
}
</script>
