<template>
  <div>
    <loading-progress
      :progress="module_percentage"
      :size="sizeString"
      :shape="shapeString"
    />
  </div>
</template>
<script>
export default {
  name: 'progressLoader',
  props: [
    'sizeString', 'shapeString', 'module_percentage'
  ]
}
</script>
