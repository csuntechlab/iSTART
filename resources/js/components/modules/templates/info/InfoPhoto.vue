<template>
  <div :class="[
  (image.position === 'top' ? 'module-info__img--top' : ''),
  (image.position === 'bottom' ? 'module-info__img--bottom' : ''),
  'module-info__img-align', determineColSize]">
    <img :class="[
    (image.width === 'half' ? 'module-info__img--half' : ''),
    'module-info__img']" :src="image.src" :alt="image.alt">
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
