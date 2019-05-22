<template>
  <span>
    <p class="module-info__sentence"><i v-if="icon" :class="icon"></i>
    <span v-if="paragraph" v-html="paragraph"></span>
    </p>
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
