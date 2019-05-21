<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <info-template v-if="contentType === 'infoTemplate'"></info-template>
    <quiz-input-template v-if="contentType=== 'quizInputTemplate'"></quiz-input-template>
    <pie-chart-template v-if="contentType ==='pieChartTemplate'"></pie-chart-template>
    <quiz-template v-if="contentType==='quizTemplate'"></quiz-template>
    <intro-slide v-if="contentType==='introTemplate'"></intro-slide>
    <module-footer v-if="contentType!=='introTemplate'"></module-footer>
  </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import infoTemplate from './../components/modules/templates/infoTemplate'
import introSlide from './../components/modules/templates/IntroSlide'
import quizTemplate from './../components/modules/templates/quizTemplate'
import quizInputTemplate from './../components/modules/templates/quizInputTemplate'
import pieChartTemplate from './../components/modules/templates/pieChartTemplate'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    quizTemplate,
    quizInputTemplate,
    infoTemplate,
    Navbar,
    introSlide,
    pieChartTemplate
  },
  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0,
      contentType: 'quizInputTemplate'
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
