<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <intro-slide v-if="contentType==='intro'"></intro-slide>
    <quiz-input-legend-template v-if="contentType=== 'quizInputLegend'"></quiz-input-legend-template>
    <quiz-template v-if="contentType === 'quiz'"></quiz-template>
    <module-footer v-if="contentType!=='intro'"></module-footer>
  </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import introSlide from './../components/modules/templates/IntroSlide'
import quizTemplate from './../components/modules/templates/quizTemplate'
import quizInputLegendTemplate from './../components/modules/templates/quizInputLegendTemplate'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    quizTemplate,
    quizInputLegendTemplate,
    Navbar,
    introSlide
  },
  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0,
      contentType: 'quizInputLegend'
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
        return 'container module'
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
