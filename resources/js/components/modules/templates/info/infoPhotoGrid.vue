<template>
    <div class="row"
    :class="[
        (image_grid.x_position === 'left' ? 'justify-content-start' : ''),
        (image_grid.x_position === 'center' ? 'justify-content-center' : ''),
        (image_grid.x_position === 'right' ? 'justify-content-end' : ''),
        (!image_grid.x_position ? 'justify-content-center': '')
    ]"
    >
    <div v-if="image_grid.caption_y_position == 'top' || !image_grid.caption_y_position" class="col-12">
        <p :class="[
            (image_grid.caption_text_align === 'left' ? 'text-left' : ''),
            (image_grid.caption_text_align === 'center' ? 'text-center' : ''),
            (image_grid.caption_text_align === 'right' ? 'text-right' : ''),
            (!image_grid.caption_text_align ? 'text-left' : '')
        ]">
            {{ image_grid.caption }}
        </p>
    </div>
    <div class="col-6" v-for="(item, alt) in image_grid" :key="alt">
        <img class="module-info__img" :src="item.src" :alt="item.alt">
    </div>
    <p
        v-if="image_grid.caption_y_position == 'bottom'"
        :class="[
            (image_grid.caption_text_align === 'left' || !image_grid.caption_text_align ? 'text-left' : ''),
            (image_grid.caption_text_align === 'center' ? 'text-center' : ''),
            (image_grid.caption_text_align === 'right' ? 'text-right' : ''),
        ]"
    >
        {{ image_grid.caption }}
    </p>
    </div>
</template>

<script>
export default {
  name: 'infoPhotoGrid',
  props: [
    'image_grid'
  ]
}
</script>
