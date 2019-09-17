<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar />
    <module-progress-bar />
    <main v-if="isSlideContentVisible" class="module__content">
      <intro-template v-if="currentSlideData.slide_type === 'intro'" :key="currentSlideNumber"></intro-template>
      <div v-else class="module__wrapper">
        <info-template v-if="currentSlideData.slide_type === 'info'" :key="currentSlideNumber"></info-template>
        <quiz-template v-if="currentSlideData.slide_type === 'quiz'" :key="currentSlideNumber"></quiz-template>
        <input-comparison-template
          v-if="currentSlideData.slide_type === 'inputComparison'"
          :key="currentSlideNumber"
        ></input-comparison-template>
        <input-pie-chart-template
          v-if="currentSlideData.slide_type === 'inputPieChart'"
          :key="currentSlideNumber"
        ></input-pie-chart-template>
        <video-template v-if="currentSlideData.slide_type === 'video'" :key="currentSlideNumber"></video-template>
        <card-flip-template
          v-if="currentSlideData.slide_type === 'cardFlip'"
          :key="currentSlideNumber"
        ></card-flip-template>
        <email-form v-if="currentSlideData.slide_type==='emailForm'" :key="currentSlideNumber"></email-form>
        <multi-choice-survey
          v-if="currentSlideData.slide_type ==='multiChoiceSurvey'"
          :key="currentSlideNumber"
        ></multi-choice-survey>
        <multi-choice-survey-results
          v-if="currentSlideData.slide_type==='multiChoiceSurveyResults'"
          :key="currentSlideNumber"
        ></multi-choice-survey-results>
      </div>
    </main>
    <module-footer v-if="currentSlideData.slide_type !== 'intro'"></module-footer>
  </div>
</template>

<script>
import alcoholModuleSlides from './../components/modules/data/modules/alcoholModule'
import nicotineModuleSlides from './../components/modules/data/modules/nicotineModule'
import marijuanaModuleSlides from './../components/modules/data/modules/marijuanaModule'
import illicitDrugsSlides from './../components/modules/data/modules/illicitDrugsModule'
import precriptionDrugsSlides from './../components/modules/data/modules/prescriptionDrugsModule'

import { mapActions, mapGetters } from 'vuex'
import Navbar from './../components/global/Navbar'
import ModuleProgressBar from './../components/modules/ModuleProgressBar'
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
    ModuleProgressBar,
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
      windowWidth: 0
    }
  },

  created () {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()

    let currentModule = this.getCurrentModule
    if (currentModule === 'Alcohol') {
      this.storeJSONInState(alcoholModuleSlides)
      this.setSlideContentVisibility(true)
    } else if (currentModule === 'Nicotine') {
      this.storeJSONInState(nicotineModuleSlides)
      this.setSlideContentVisibility(true)
    } else if (currentModule === 'Marijuana') {
      this.storeJSONInState(marijuanaModuleSlides)
      this.setSlideContentVisibility(true)
    } else if (currentModule === 'Illicit Drugs') {
      this.storeJSONInState(illicitDrugsSlides)
      this.setSlideContentVisibility(true)
    } else if (currentModule === 'Prescription Drugs') {
      this.storeJSONInState(precriptionDrugsSlides)
      this.setSlideContentVisibility(true)
    } else {
      this.$router.push({ name: 'Dashboard' })
    }
  },

  destroyed () {
    window.addEventListener('resize', this.getWindowWidth)
  },

  computed: {
    ...mapGetters([
      'currentSlideData',
      'currentSlideNumber',
      'isSlideContentVisible',
      'getCurrentModule'
    ]),

    checkWindowWidth () {
      if (this.windowWidth >= 768) {
        return 'container module'
      } else {
        return 'module'
      }
    }
  },

  methods: {
    ...mapActions([
      'storeJSONInState',
      'setSlideContentVisibility',
      'navigateFromSlide',
      'navigateToSlide'
    ]),

    getWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  },

  mounted () {
    document.onkeyup = e => {
      if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'production'
      ) {
        // Shift + Tilde = Set slide index
        if (e.shiftKey && e.which === 192) {
          let responseAsSlideNumber = parseInt(
            prompt('Please enter the slide index you want to visit')
          )
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
