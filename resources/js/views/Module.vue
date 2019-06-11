<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <quiz-input-template v-if="current_slide(slideNumber).slide_type === 'quizInput'"></quiz-input-template>
    <pie-chart-template v-if="current_slide(slideNumber).slide_type === 'pie'"></pie-chart-template>
    <intro-template v-if="current_slide(slideNumber).slide_type === 'intro'"></intro-template>
    <info-template v-if="current_slide(slideNumber).slide_type === 'info'"></info-template>
    <quiz-template v-if="current_slide(slideNumber).slide_type === 'quiz'"></quiz-template>
    <video-template v-if="current_slide(slideNumber).slide_type === 'video'"></video-template>
    <card-flip-template v-if="current_slide(slideNumber).slide_type === 'cardFlip'"></card-flip-template>
    <email-form v-if="current_slide(slideNumber).slide_type==='emailForm'"></email-form>
    <multi-choice-survey v-if="current_slide(slideNumber).slide_type ==='multiChoiceSurvey'"></multi-choice-survey>
    <multi-choice-survey-results v-if="current_slide(slideNumber).slide_type==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    <module-footer v-if="current_slide(slideNumber).slide_type !== 'intro'"></module-footer>
  </div>
</template>

<script>
import alcoholModuleSlides from './../components/modules/data/alcoholModule'

import { mapActions, mapGetters, mapState } from 'vuex'
import Navbar from './../components/global/Navbar'
import ModuleHeader from './../components/modules/ModuleHeader'
import ModuleFooter from './../components/modules/ModuleFooter'
import MultiChoiceSurvey from './../components/modules/templates/MultiChoiceSurvey'
import InfoTemplate from './../components/modules/templates/InfoTemplate'
import IntroTemplate from './../components/modules/templates/IntroSlide'
import QuizTemplate from './../components/modules/templates/QuizTemplate'
import quizInputTemplate from './../components/modules/templates/quizInputTemplate'
import EmailForm from './../components/modules/templates/EmailForm'
import MultiChoiceSurveyResults from './../components/modules/templates/MultiChoiceSurveyResults'
import VideoTemplate from './../components/modules/templates/VideoTemplate'
import CardFlipTemplate from './../components/modules/templates/CardFlipTemplate'
import pieChartTemplate from './../components/modules/templates/pieChartTemplate'

export default {
  name: 'Module',
  components: {
    ModuleHeader,
    ModuleFooter,
    IntroTemplate,
    InfoTemplate,
    quizInputTemplate,
    pieChartTemplate,
    Navbar,
    EmailForm,
    QuizTemplate,
    MultiChoiceSurvey,
    MultiChoiceSurveyResults,
    VideoTemplate,
    CardFlipTemplate
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
      if ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') && e.shiftKey && e.which === 192) {
        this.proceedAndContinue()
      }
    }
  }
}
</script>
