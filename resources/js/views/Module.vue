<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <module-content></module-content>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleContent from './../components/modules/moduleContent'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    moduleContent
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      sizeOfContainer: 0
    }
  },
  created () {
  },
  computed: {
    checkWindowWidth () {
      if (this.windowWidth >= 720) {
        return 'container--desktop container module'
      } else {
        return 'module'
      }
    }
  },
  mounted () {
    this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
    window.onresize = () => {
      if (this.sizeOfContainer) {
        this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
      }
    }
  }
}
</script>
