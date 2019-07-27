<template>
    <div class="row"
        v-bind:class="[
            (content_alignment === 'left' ? 'justify-content-start' : ''),
            (content_alignment === 'center' || !content_alignment ? 'justify-content-center' : ''),
            (content_alignment === 'right' ? 'justify-content-end' : ''),
        ]"
    >
        <div
            class="col-6 image-grid__wrapper"
            v-for="(item, alt) in image_grid"
            :key="alt"
            v-bind="item"
            v-bind:class="[
                (item.image_y_align === 'top' ? 'align-self-start' : ''),
                (item.image_y_align === 'center' || !item.image_y_align ? 'align-self-center' : ''),
                (item.image_y_align === 'bottom' ? 'align-self-end' : '')
            ]"
        >
            <figcaption v-if="item.caption_y_position === 'top' || (!item.caption_y_position && item.caption)">
                <b>{{ item.caption }}</b>
            </figcaption>
            <img class="image-grid__img" :src="item.src" :alt="item.alt">
            <figcaption v-if="item.caption_y_position === 'bottom' && item.caption">
                <b>{{ item.caption }}</b>
            </figcaption>
        </div>
    </div>
</template>

<script>
export default {
  name: 'infoPhotoGrid',
  props: [
    'image_grid',
    'content_alignment'
  ]
}
</script>
