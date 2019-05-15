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
    determineColSize: function () {
      if (this.imageSize > 2) {
        return 'col-lg-4 col-md-8 col-12'
      } else if (this.imageSize === 2) {
        return 'col-lg-6 col-12'
      } else {
        return 'col-12'
      }
    }
  }
}
</script>
