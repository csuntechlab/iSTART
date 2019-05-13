<template>
  <span>
    <img class="module-info__img" v-if="image" :src="image" alt="">
    <p class="module-info__sentence"><i :class="icon.c"></i> {{ paragraph }}</p>
  </span>
</template>

<script>
export default {
  name: 'infoContent',
  props: [
    'paragraph',
    'icon',
    'image'
  ]
}
</script>
