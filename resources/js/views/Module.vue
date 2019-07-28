<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <main v-if="isSlideContentVisible" class="module__content">
      <intro-template v-if="currentSlideData.slide_type === 'intro'"></intro-template>
      <info-template v-if="currentSlideData.slide_type === 'info'"></info-template>
      <quiz-template v-if="currentSlideData.slide_type === 'quiz'"></quiz-template>
      <input-comparison-template v-if="currentSlideData.slide_type === 'inputComparison'"></input-comparison-template>
      <input-pie-chart-template v-if="currentSlideData.slide_type === 'inputPieChart'"></input-pie-chart-template>
      <video-template v-if="currentSlideData.slide_type === 'video'"></video-template>
      <card-flip-template v-if="currentSlideData.slide_type === 'cardFlip'"></card-flip-template>
      <email-form v-if="currentSlideData.slide_type==='emailForm'"></email-form>
      <multi-choice-survey v-if="currentSlideData.slide_type ==='multiChoiceSurvey'"></multi-choice-survey>
      <multi-choice-survey-results v-if="currentSlideData.slide_type==='multiChoiceSurveyResults'"></multi-choice-survey-results>
    </main>
    <module-footer v-if="currentSlideData.slide_type !== 'intro'">></module-footer>
  </div>
</template>

<script>
import alcoholModuleSlides from './../components/modules/data/modules/alcoholModule'
import test from './../components/modules/data/modules/test'

import { mapActions, mapGetters } from 'vuex'
import Navbar from './../components/global/Navbar'
import ModuleHeader from './../components/modules/ModuleHeader'
import ModuleFooter from './../components/modules/ModuleFooter'
import MultiChoiceSurvey from './../components/modules/templates/MultiChoiceSurvey'
import InfoTemplate from './../components/modules/templates/InfoTemplate'
import IntroTemplate from './../components/modules/templates/IntroSlide'
import QuizTemplate from './../components/modules/templates/QuizTemplate'
import InputComparisonTemplate from './../components/modules/templates/InputComparisonTemplate'
import InputPieChartTemplate from './../components/modules/templates/InputPieChartTemplate'
import EmailForm from './../components/modules/templates/EmailForm'
import MultiChoiceSurveyResults from './../components/modules/templates/MultiChoiceSurveyResults'
import VideoTemplate from './../components/modules/templates/VideoTemplate'
import CardFlipTemplate from './../components/modules/templates/CardFlipTemplate'

export default {
  components: {
    ModuleHeader,
    ModuleFooter,
    IntroTemplate,
    InfoTemplate,
    InputComparisonTemplate,
    InputPieChartTemplate,
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
      sizeOfContainer: 0
    }
  },

  created () {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()

    if (this.getCurrentModule === 'Alcohol') {
      this.storeJSONInState(alcoholModuleSlides)
      this.setSlideContentVisibility(true)
    } else if (this.getCurrentModule === 'Marijuana') {
      this.storeJSONInState(test)
      this.setSlideContentVisibility(true)
    } else {
      this.$router.push({ name: 'Dashboard' })
    }
  },

  destroyed () {
    window.addEventListener('resize', this.getWindowWidth)
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'isSlideContentVisible',
        'getCurrentModule'
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
        'storeJSONInState',
        'setSlideContentVisibility',
        'navigateFromSlide',
        'navigateToSlide'
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

    document.onkeyup = (e) => {
      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
        // Shift + Tilde = Set slide index
        if (e.shiftKey && e.which === 192) {
          let responseAsSlideNumber = parseInt(prompt('Please enter the slide index you want to visit'))
          this.navigateToSlide(responseAsSlideNumber)
        }

        // Shift + Right Arrow = Go forward 1 slide
        if (e.shiftKey && e.which === 39) {
          this.navigateFromSlide('forward')
        }

        // Shift + Left Arrow = Go back 1 slide
        if (e.shiftKey && e.which === 37) {
          this.navigateFromSlide('back')
        }
      }
    }
  }
}
</script>
