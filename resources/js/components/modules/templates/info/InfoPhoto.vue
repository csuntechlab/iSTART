<template>
  <div class="row"
    :class="[
      (image.x_position === 'left' ? 'justify-content-start' : ''),
      (image.x_position === 'center' ? 'justify-content-center' : ''),
      (image.x_position === 'right' ? 'justify-content-end' : ''),
      (!image.x_position ? 'justify-content-center': '')
    ]"
  >
    <div v-if="image.caption_y_position == 'top' || !image.caption_y_position" class="col-12">
      <p :class="[
        (image.caption_text_align === 'left' ? 'text-left' : ''),
        (image.caption_text_align === 'center' ? 'text-center' : ''),
        (image.caption_text_align === 'right' ? 'text-right' : ''),
        (!image.caption_text_align ? 'text-left' : '')
      ]">
        {{ image.caption }}
      </p>
    </div>
    <div :class="[determineColSize]">
      <img class="module-info__img" :src="image.src" :alt="image.alt">
    </div>
    <p v-if="image.caption_y_position == 'bottom'"
      :class="[
        (image.caption_text_align === 'left' ? 'text-left' : ''),
        (image.caption_text_align === 'center' ? 'text-center' : ''),
        (image.caption_text_align === 'right' ? 'text-right' : ''),
        (!image.caption_text_align ? 'text-left' : '')
      ]
    ">
      {{ image.caption }}
    </p>
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
      if (this.image.img_size === 'full') {
        return 'col-12'
      } else if (this.image.img_size === 'half') {
        return 'col-6'
      } else if (this.image.img_size === 'third') {
        return 'col-4'
      } else if (this.image.img_size === 'quarter') {
        return 'col-3'
      } else if (this.image.img_size === 'sixth') {
        return 'col-2'
      } else {
        return 'col-md-4 col-12'
      }
    }
  }
}
</script>
