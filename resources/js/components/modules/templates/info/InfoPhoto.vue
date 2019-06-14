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
      <img @click="checkMap" class="module-info__img" :src="image.src" :alt="image.alt">
    </div>
    <p v-if="image.caption_y_position == 'bottom'"
      :class="[
        (image.caption_text_align === 'left' || !image.caption_text_align ? 'text-left' : ''),
        (image.caption_text_align === 'center' ? 'text-center' : ''),
        (image.caption_text_align === 'right' ? 'text-right' : ''),
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
      if (this.image.size === 'full') {
        return 'col-12'
      } else if (this.image.size === 'half') {
        return 'col-6'
      } else if (this.image.size === 'third') {
        return 'col-4'
      } else if (this.image.size === 'quarter') {
        return 'col-3'
      } else if (this.image.size === 'sixth') {
        return 'col-2'
      } else {
        return 'col-lg-6 col-md-8 col-12'
      }
    }
  },
  methods: {
    checkMap: function () {
      let imageSizes = new Map([
        ['full', '-12'], ['half', '-6'], ['third', '-4'], ['quarter', '-3']
      ])
      // let setWidth = '';
      console.log(imageSizes)
      console.log(imageSizes.get(this.image.mobile_size))
      console.log(imageSizes.get(this.image.tablet_size))
      console.log(imageSizes.get(this.image.desktop_size))
    }
  }
}
</script>
