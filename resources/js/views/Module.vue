<template>
  <div class="module">
    <module-header></module-header>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter
  }
}
</script>
