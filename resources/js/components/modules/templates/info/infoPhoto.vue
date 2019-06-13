<template>
  <div class="row"
    :class="[
      (image.x_position === 'left' ? 'justify-content-start' : ''),
      (image.x_position === 'center' ? 'justify-content-center' : ''),
      (image.x_position === 'right' ? 'justify-content-end' : ''),
      (!image.x_position ? 'justify-content-center': '')
    ]"
  >
    <p v-if="image.caption_y_position == 'top'" style="width:100%"
      :class="[
        (image.caption_text_align === 'left' ? 'text-left' : ''),
        (image.caption_text_align === 'center' ? 'text-center' : ''),
        (image.caption_text_align === 'right' ? 'text-right' : ''),
        (!image.caption_text_align ? 'text-left' : '')
      ]
    ">
        {{ image.caption }}
      </p>
    <div :class="[determineColSize]">
      <img class="module-info__img" :src="image.src" :alt="image.alt">
    </div>
    <p v-if="image.caption_y_position == 'bottom'" style="width:100%"
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
      if (this.imageCount >= 2) {
        return 'col-sm-6 col-12'
      } else {
        return 'col-12'
      }
    }
  }
}
</script>
