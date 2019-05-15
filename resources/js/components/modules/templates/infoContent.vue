<template>
  <span>
    <p class="module-info__sentence"><i v-if="icons" :class="icons"></i> {{ paragraph }}</p>
  </span>
</template>

<script>
export default {
  name: 'infoContent',
  props: [
    'paragraph',
    'icon'
  ],
  data () {
    return {
      icons: null
    }
  },
  mounted () {
    this.icons = this.icon.c
  }
}
</script>
