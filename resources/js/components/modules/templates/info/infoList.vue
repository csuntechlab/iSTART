<template>
    <li v-html="listItem"></li>
</template>

<script>
export default {
  name: 'infoList',
  props: [
    'listItem'
  ]
}
</script>
