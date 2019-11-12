<template>
  <div class="row">
    <div class="col-12">
      <ul>
        <li
          v-for="(element, index) in listItems"
          :key="`${index}`"
          class="module-text__list"
          v-html="listItems[`${index}`]">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoList',
  props: [
    'listItems'
  ]
}
</script>
