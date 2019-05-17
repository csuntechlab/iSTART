<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <intro-slide v-if="contentType==='introTemplate'"></intro-slide>
    <quiz-template v-if="contentType==='quizTemplate'"></quiz-template>
    <multi-choice-survey v-if="contentType==='multiChoiceSurvey'"></multi-choice-survey>
    <multi-choice-survey-results v-if="contentType==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    <module-footer v-if="contentType!=='introTemplate'"></module-footer>
    
  </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import multiChoiceSurvey from './../components/modules/templates/MultiChoiceSurvey'
import introSlide from './../components/modules/templates/IntroSlide'
import quizTemplate from './../components/modules/templates/quizTemplate'
import multiChoiceSurveyResults from './../components/modules/templates/MultiChoiceSurveyResults'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    Navbar,
    introSlide,
    quizTemplate,
    multiChoiceSurvey,
    multiChoiceSurveyResults
  },
  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0,
      contentType: 'multiChoiceSurveyResults'
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
