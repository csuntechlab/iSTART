<template>
  <div class="module-info__img-container row no-gutters">
    <div class="col-12">
      <figure>
        <figcaption
          v-if="image.caption"
          class="module-text__caption"
          :class="[
            (image.caption_text_align === 'left' ? 'text-left' : ''),
            (image.caption_text_align === 'center' ? 'text-center' : ''),
            (image.caption_text_align === 'right' ? 'text-right' : ''),
            (!image.caption_text_align ? 'text-left' : '')
          ]"
          v-html="image.caption">
        </figcaption>
        <div class="row"
          :class="[
            (image.x_position === 'left' ? 'justify-content-start' : ''),
            (image.x_position === 'center' ? 'justify-content-center' : ''),
            (image.x_position === 'right' ? 'justify-content-end' : ''),
            (!image.x_position ? 'justify-content-center': '')
        ]">
          <div :class="[determineColSize]">
            <img class="module-info__img" :src="image.src" :alt="image.alt">
          </div>
        </div>
        <figcaption
          v-if="image.caption_y_position == 'bottom' && image.caption"
          class="module-text__caption"
          :class="[
            (image.caption_text_align === 'left' || !image.caption_text_align ? 'text-left' : ''),
            (image.caption_text_align === 'center' ? 'text-center' : ''),
            (image.caption_text_align === 'right' ? 'text-right' : ''),
          ]"
          v-html="image.caption">
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'image'
  ],
  computed: {
    determineColSize: function () {
      if (
        !this.image.size &&
        !this.image.mobile_size &&
        !this.image.tablet_size &&
        !this.image.desktop_size
      ) {
        let defaultSize = 'col-lg-7 col-md-9 col-sm-8 col-11'
        return defaultSize
      }
      if (this.image.size === 'informational') {
        let informationalSize = 'col-lg-8 col-md-9 col-sm-10 col-12'
        return informationalSize
      }
      if (this.image.size === 'symbol' || this.image.size === 'clipart') {
        let symboleSize = 'col-6 col-md-4'
        return symboleSize
      }
      let imageSizes = new Map([
        ['1', '-12'],
        ['5/6', '-10'],
        ['2/3', '-8'],
        ['7/12', '-7'],
        ['1/2', '-6'],
        ['5/12', '-5'],
        ['1/3', '-4'],
        ['1/4', '-3'],
        ['1/6', '-2']
      ])
      var createdWidth = ''
      var setSizes = {
        'size': this.image.size || '',
        'mobile_size': this.image.mobile_size || '',
        'tablet_size': this.image.tablet_size || '',
        'desktop_size': this.image.desktop_size || ''
      }
      const declearedSizes = Object.values(setSizes)
      for (var i = 0; i <= declearedSizes.length; i++) {
        if (i === 0 && declearedSizes[i] !== '') {
          createdWidth += 'col' + imageSizes.get(declearedSizes[i]) + ' '
        }
        if (i === 1 && declearedSizes[i] !== '') {
          createdWidth += 'col-sm' + imageSizes.get(declearedSizes[i]) + ' '
        }
        if (i === 2 && declearedSizes[i] !== '') {
          createdWidth += 'col-md' + imageSizes.get(declearedSizes[i]) + ' '
        }
        if (i === 3 && declearedSizes[i] !== '') {
          createdWidth += 'col-lg' + imageSizes.get(declearedSizes[i]) + ' '
        }
      }
      return createdWidth.trim()
    }
  }
}
</script>
