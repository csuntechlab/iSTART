<template>
  <span>
    <p class="module-info__sentence"><i v-if="icon" :class="icon"></i> {{ paragraph }}</p>
  </span>
</template>

<script>
export default {
  name: 'infoContent',
  props: [
    'paragraph',
    'icon'
  ]
}
</script>
