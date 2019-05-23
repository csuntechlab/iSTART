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
        return 'col-lg-6 col-md-6 col-6'
      } else if (this.imageCount === 2) {
        return 'col-lg-6 col-6'
      } else {
        return 'col-12 text-center'
      }
    }
  }
}
</script>
