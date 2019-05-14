<template>
  <div class="module" ref="moduleContainer" :class="checkWindowWidth">
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <!-- <module-content></module-content> -->
    <multi-choice-survey></multi-choice-survey>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleContent from './../components/modules/moduleContent'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import multiChoiceSurvey from './../components/modules/templates/MultiChoiceSurvey'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    moduleContent,
    multiChoiceSurvey
  },
  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0
    }
  },
  created () {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()
  },
  destroyed () {
    window.addEventListener('resize', this.getWindowWidth)
  },
  computed: {
    checkWindowWidth () {
      if (this.windowWidth >= 768) {
        return 'container--desktop container module'
      } else {
        return 'module'
      }
    }
  },
  methods: {
    getWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    if (this.$refs.moduleContainer) {
      this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
    }
    window.onresize = () => {
      if (this.$refs.moduleContainer) {
        this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
      }
    }
  }
}
</script>
