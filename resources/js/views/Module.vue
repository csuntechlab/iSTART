<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <intro-template v-if="current_slide(slideNumber).slide_type === 'intro'"></intro-template>
    <info-template v-if="current_slide(slideNumber).slide_type === 'informational'"></info-template>
    <quiz-template v-if="current_slide(slideNumber).slide_type === 'quiz'"></quiz-template>
    <video-template v-if="current_slide(slideNumber).slide_type === 'video'"></video-template>
    <card-flip-template v-if="current_slide(slideNumber).slide_type === 'cardFlip'"></card-flip-template>
    <multi-choice-survey v-if="current_slide(slideNumber).slide_type ==='multiChoiceSurvey'"></multi-choice-survey>
    <multi-choice-survey-results v-if="current_slide(slideNumber).slide_type==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    <module-footer v-if="current_slide(slideNumber).slide_type !== 'intro'"></module-footer>
  </div>
</template>

<script>
import alcoholModuleSlides from './../components/modules/data/alcoholModule'

import { mapActions, mapGetters, mapState } from 'vuex'
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

export default {
  name: 'Module',
  components: {
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
      contentType: 'video',
      windowWidth: 0,
      sizeOfContainer: 0
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
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),

    ...mapGetters(
      [
        'current_slide'
      ]
    ),

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
        'getSlideInfo',
        'allowUserToContinue'
      ]
    ),

    proceedAndContinue () {
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    },

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

    document.onkeyup = (e) => {
      if (process.env.NODE_ENV === 'development' && e.ctrlKey && e.altKey && e.shiftKey && e.which === 13) {
        this.proceedAndContinue()
      }
    }
  }
}
</script>
