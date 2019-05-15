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
        return 'col-4'
      } else if (this.imageSize === 2) {
        return 'col-6'
      } else {
        return 'col-12'
      }
    }
  }
}
</script>
