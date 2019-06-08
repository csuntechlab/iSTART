<template>
<div class="col-12">
  <p v-if="paragraph" v-html="paragraph"></p>
</div>
</template>

<script>
export default {
  props: [
    'paragraph',
    'icon'
  ]
}
</script>
