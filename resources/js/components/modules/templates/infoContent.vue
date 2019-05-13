<template>
  <p class="module-info__sentence"><i :class="icon.c"></i> {{ paragraph }}</p>
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
