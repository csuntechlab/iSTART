<template>
  <div ref="moduleContainer" :class="windowWidth >= 768 ? 'container--desktop container module' : 'module' ">
    <module-header :size_of_container="sizeOfContainer"></module-header>
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
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      sizeOfContainer: 0
    }
  },
  mounted () {
    window.onresize = () => {
      this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
    }
  },
  computed: {
    containerSize () {
      return this.sizeOfContainer
    }
  }
}
</script>
