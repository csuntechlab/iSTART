<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <navbar :displayCurrentPage="getCurrentModule"/>
    <module-progress-bar/>
    <main v-if="isSlideContentVisible" class="module__content">
      <intro-slide v-if="currentSlideData.slide_type === 'intro'" :key="currentSlideNumber"/>
      <div v-else class="module__wrapper">
        <informational v-if="currentSlideData.slide_type === 'info'" :key="currentSlideNumber"/>
        <card-flip v-if="currentSlideData.slide_type === 'cardFlip'" :key="currentSlideNumber"/>
        <quiz v-if="currentSlideData.slide_type === 'quiz'" :key="currentSlideNumber"/>
        <pie-chart-input v-if="currentSlideData.slide_type === 'pieChartInput'" :key="currentSlideNumber"/>
        <pie-chart-results v-if="currentSlideData.slide_type === 'pieChartResults'" :key="currentSlideNumber"/>
        <self-assessment v-if="currentSlideData.slide_type === 'selfAssessment'" :key="currentSlideNumber"/>
        <self-assessment-results v-if="currentSlideData.slide_type === 'selfAssessmentResults'" :key="currentSlideNumber"/>
        <wellness-goal v-if="currentSlideData.slide_type==='wellnessGoal'" :key="currentSlideNumber"/>
        <final-slide v-if="currentSlideData.slide_type==='finalSlide'" :key="currentSlideNumber"/>
      </div>
    </main>
    <module-footer v-if="currentSlideData.slide_type !== 'intro'"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { changeRouteTitle } from './../mixins/changeRouteTitle'
import alcoholModuleSlides from './../components/module/data/modules/alcoholModule'
import nicotineModuleSlides from './../components/module/data/modules/nicotineModule'
import marijuanaModuleSlides from './../components/module/data/modules/marijuanaModule'
import illicitDrugsSlides from './../components/module/data/modules/illicitDrugsModule'
import precriptionDrugsSlides from './../components/module/data/modules/prescriptionDrugsModule'
import comparisonModuleSlides from './../components/module/data/modules/comparisonModule'

import Navbar from './../components/global/Navbar'
import ModuleProgressBar from './../components/module/shared/ModuleProgressBar'
import ModuleFooter from './../components/module/shared/ModuleFooter'
import IntroSlide from './../components/module/templates/IntroSlide'
import FinalSlide from './../components/module/templates/FinalSlide'
import Informational from './../components/module/templates/Informational'
import CardFlip from './../components/module/templates/CardFlip'
import Quiz from './../components/module/templates/Quiz'
import PieChartInput from './../components/module/templates/PieChartInput'
import PieChartResults from './../components/module/templates/PieChartResults'
import SelfAssessment from './../components/module/templates/SelfAssessment'
import SelfAssessmentResults from './../components/module/templates/SelfAssessmentResults'
import WellnessGoal from './../components/module/templates/WellnessGoal'

export default {
  mixins: [
    changeRouteTitle
  ],
  components: {
    Navbar,
    ModuleProgressBar,
    ModuleFooter,
    IntroSlide,
    FinalSlide,
    Informational,
    CardFlip,
    Quiz,
    PieChartInput,
    PieChartResults,
    SelfAssessment,
    SelfAssessmentResults,
    WellnessGoal
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
    } else if (currentModule === 'Comparison') {
      this.storeJSONInState(comparisonModuleSlides)
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
