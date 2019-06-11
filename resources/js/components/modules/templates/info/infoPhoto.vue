<template>
  <div class="row" :class="[
    (image.x_position === 'left' ? 'justify-content-start' : ''),
    (image.x_position === 'center' ? 'justify-content-center' : ''),
    (image.x_position === 'right' ? 'justify-content-end' : ''),
    (!image.x_position ? 'justify-content-center': '')
    ]"
  >
    <div :class="[
    (image.y_position === 'top' ? 'module-info__img--top' : ''),
    (image.y_position === 'bottom' ? 'module-info__img--bottom' : ''),
    '', determineColSize]">
      <img class="module-info__img" :src="image.src" :alt="image.alt">
    </div>
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
