<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <intro-template v-if="contentType==='intro'"></intro-template>
    <info-template v-if="contentType === 'info'"></info-template>
    <quiz-template v-if="contentType === 'quiz'"></quiz-template>
    <video-template v-if="contentType === 'video'"></video-template>
    <card-flip-template v-if="contentType === 'cardFlip'"></card-flip-template>
    <multi-choice-survey v-if="contentType==='multiChoiceSurvey'"></multi-choice-survey>
    <multi-choice-survey-results v-if="contentType==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    <module-footer></module-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './../components/global/Navbar'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import multiChoiceSurvey from './../components/modules/templates/MultiChoiceSurvey'
import infoTemplate from './../components/modules/templates/infoTemplate'
import introTemplate from './../components/modules/templates/IntroSlide'
import quizTemplate from './../components/modules/templates/quizTemplate'
import multiChoiceSurveyResults from './../components/modules/templates/MultiChoiceSurveyResults'
import videoTemplate from './../components/modules/templates/videoTemplate'
import cardFlipTemplate from './../components/modules/templates/cardFlipTemplate'
import alcoholModuleSlides from './../components/modules/data/alcoholModule'

export default {
  name: 'Module',
  components: {
    Navbar,
    moduleHeader,
    moduleFooter,
    introTemplate,
    infoTemplate,
    Navbar,
    quizTemplate,
    multiChoiceSurvey,
    multiChoiceSurveyResults,
    videoTemplate,
    cardFlipTemplate
  },

  data () {
    return {
      windowWidth: 0,
      sizeOfContainer: 0,
      contentType: 'multiChoiceSurvey',
    }
  },

  created () {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()
    if (alcoholModuleSlides) {
      this.getSlideInfo(alcoholModuleSlides)
    }
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
    ...mapActions(
      [
        'getSlideInfo'
      ]
    ),
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
