<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <quiz-input-legend-template v-if="slide_type=== 'quizInputLegend'"></quiz-input-legend-template>
    <quiz-template v-if="slide_type === 'quiz'"></quiz-template>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import quizTemplate from './../components/modules/templates/quizTemplate'
import quizInputLegendTemplate from './../components/modules/templates/quizInputLegendTemplate'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    quizTemplate,
    quizInputLegendTemplate
  },
  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0,
      slide_type: 'quizInputLegend'
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
