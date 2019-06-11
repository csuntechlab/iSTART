<template>
  <div class="row">
    <div class="col-12">
      <p v-if="paragraph" v-html="paragraph"></p>
    </div>
  </div>
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
