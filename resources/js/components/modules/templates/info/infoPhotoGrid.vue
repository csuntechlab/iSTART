<template>
    <div class="row"
        v-bind:class="[
            (alignment === 'left' ? 'justify-content-start' : ''),
            (alignment === 'center' || !alignment ? 'justify-content-center' : ''),
            (alignment === 'right' ? 'justify-content-end' : ''),
    ]"
    >
        <div
            class="col-6 image-grid__wrapper"
            v-for="(item, alt) in image_grid"
            :key="alt"
            v-bind="item"
            v-bind:class="[
                (item.y_align === 'top' ? 'align-self-start' : ''),
                (item.y_align === 'center' || !item.y_align ? 'align-self-center' : ''),
                (item.y_align === 'bottom' ? 'align-self-end' : '')
            ]"
        >
            <figcaption v-if="item.caption_y_position === 'top' || (!item.caption_y_position && item.caption)">
                {{ item.caption }}
            </figcaption>
            <img class="image-grid__img" :src="item.src" :alt="item.alt">
            <figcaption v-if="item.caption_y_position === 'bottom' && item.caption">
                {{ item.caption }}
            </figcaption>
        </div>
    </div>
</template>

<script>
export default {
  name: 'infoPhotoGrid',
  props: [
    'image_grid',
    'alignment'
  ]
}
</script>
