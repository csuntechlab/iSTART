<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <quiz-input-template v-if="slideNumber !== 2 && slide_type=== 'quizInput'"></quiz-input-template>
    <pie-chart-template v-if="slideNumber === 2"></pie-chart-template>
    <module-footer></module-footer>
    <!-- <module-header :size_of_container="sizeOfContainer"></module-header>
    <quiz-input-template v-if="slide_type=== 'quizInput'"></quiz-input-template>
    <pie-chart-template v-if="slide_type ==='pie'"></pie-chart-template>
    <intro-template v-if="current_slide(slideNumber).slide_type === 'intro'"></intro-template>
    <info-template v-if="current_slide(slideNumber).slide_type === 'informational'"></info-template>
    <quiz-template v-if="current_slide(slideNumber).slide_type === 'quiz'"></quiz-template>
    <video-template v-if="current_slide(slideNumber).slide_type === 'video'"></video-template>
    <card-flip-template v-if="current_slide(slideNumber).slide_type === 'cardFlip'"></card-flip-template>
    <email-form v-if="current_slide(slideNumber).slide_type==='emailForm'"></email-form>
    <multi-choice-survey v-if="current_slide(slideNumber).slide_type ==='multiChoiceSurvey'"></multi-choice-survey>
    <multi-choice-survey-results v-if="current_slide(slideNumber).slide_type==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    <module-footer v-if="current_slide(slideNumber).slide_type !== 'intro'"></module-footer> -->
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
import quizInputTemplate from './../components/modules/templates/quizInputTemplate'
import pieChartTemplate from './../components/modules/templates/pieChartTemplate'
import emailForm from './../components/modules/templates/emailForm'
import multiChoiceSurveyResults from './../components/modules/templates/MultiChoiceSurveyResults'
import videoTemplate from './../components/modules/templates/videoTemplate'
import cardFlipTemplate from './../components/modules/templates/cardFlipTemplate'

export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    quizInputTemplate,
    pieChartTemplate,
    introTemplate,
    infoTemplate,
    Navbar,
    emailForm,
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
      contentType: 'quizInputTemplate'
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
        slide_type: state => state.Slides.slide_type
      }
    ),
    ...mapGetters(
      [
        'current_slide',
        'slideNumber'
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
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber, slide_type: null })
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
