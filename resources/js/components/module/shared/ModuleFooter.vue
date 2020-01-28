<template>
  <footer class="module-footer">
    <div v-if="checkForStart()" class="module-footer__item-left module-footer__item">
      <button @click="slideBack" class="module-footer__button button button-primary text-right text-md-center">
        <i class="fas fa-chevron-left"></i>
        Back
      </button>
    </div>
    <!-- If review mode -->
    <div v-if="checkForReviewMode() && !checkForEnd" class="module-footer__item-right module-footer__item">
      <button @click="slideForward" class="module-footer__button button button-primary text-left text-md-center">
        Next
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div v-else-if="!checkForEnd" class="module-footer__item-right module-footer__item">
      <!-- If next button is enabled -->
      <button v-if="isContinueButtonEnabled" @click="slideForward" class="module-footer__button button button-primary text-left text-md-center">
        Next
        <i class="fas fa-chevron-right"></i>
      </button>
      <!-- If next button not enabled -->
      <div v-else>
        <div id="tooltip" class="module-footer__tooltip hidden">
          {{ currentSlideData.header.tooltip }}
        </div>
        <button @click="showTooltip" @mouseover="showTooltip" @mouseout="hideTooltip" disabled aria-disabled="true" class="module-footer__button button button-primary--disabled text-left text-md-center">
          Next
        </button>
      </div>
    </div>
    <!-- If end of content -->
    <div v-if="checkForEnd && !isDemoModeEnabled" class="module-footer__item-right module-footer__item module-footer__item-return">
      <button @click="returnToDashboard" class="module-footer__button button button-primary">
        Return to Dashboard
      </button>
    </div>
    <!-- Check for end & demo mode -->
    <div v-else-if="checkForEnd && isDemoModeEnabled" class="module-footer__item-right module-footer__item module-footer__item-return">
      <button @click="returnToDemoDashboard" class="module-footer__button button button-primary">
        Return to Dashboard
      </button>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { idleTimeout } from './../../../mixins/idleTimeout'

export default {
  mixins: [
    idleTimeout
  ],

  computed: {
    ...mapGetters(
      [
        'isDemoModeEnabled',
        'isContinueButtonEnabled',
        'isBackButtonEnabled',
        'isSlideContentVisible',
        'currentSlideData',
        'currentSlideNumber',
        'getModuleData',
        'getCurrentModule',
        'getCurrentModuleData',
        'latestSlideNumber',
        'totalSlides',
        'user'
      ]
    ),

    ...mapState(
      [
        'JSONSlideData'
      ]
    ),

    checkForEnd () {
      if (this.currentSlideNumber === (this.totalSlides - 1)) {
        let currentModule = this.getCurrentModule.toLowerCase()
        let moduleData = this.getModuleData
        let moduleDataLength = Object.keys(moduleData).length

        for (let i = 0; i < moduleDataLength; i += 1) {
          let moduleDataName = moduleData[i].name.toLowerCase()
          let moduleDataIsReview = moduleData[i].progress.is_review

          if ((moduleDataName === currentModule) && !moduleDataIsReview) {
            let userId = this.user.user_id
            let nextModule = moduleData[i + 1].name.toLowerCase()
            if ((i !== moduleDataLength) && (this.user.user_group === 'intervention')) {
              let completePayload = {
                user_id: userId,
                current_module: currentModule,
                next_module: nextModule,
                index: i
              }
              this.completeModule(completePayload)
            }
            break
          }
        }
        return true
      } else {
        return false
      }
    }
  },

  updated () {
    this.resetIdleTimer()
  },

  methods: {
    ...mapActions(
      [
        'navigateToSlide',
        'navigateFromSlide',
        'resetSlideNavigation',
        'setSlideContentVisibility',
        'enableContinue',
        'setModuleProgress',
        'completeModule'
      ]
    ),

    slideForward () {
      this.setSlideContentVisibility(false)
      this.resetSlideNavigation()
      this.storeModuleProgress()
      this.navigateFromSlide('forward')
      this.setSlideContentVisibility(true)
      this.checkForVisitedSlide()
    },

    slideBack () {
      this.setSlideContentVisibility(false)
      this.resetSlideNavigation()
      this.navigateFromSlide('back')
      this.setSlideContentVisibility(true)
      this.checkForVisitedSlide()
    },

    storeModuleProgress () {
      let userId = this.user.user_id
      let moduleName = this.getCurrentModule.toLowerCase()
      let currentSlideNumber = this.currentSlideNumber
      let latestSlideNumber = this.latestSlideNumber
      let maxPage = this.totalSlides
      let expirationDate = this.getCurrentModuleData.progress.due_date

      if ((currentSlideNumber === latestSlideNumber) && !this.checkForReviewMode()) {
        let payload = {
          userId: userId,
          moduleName: moduleName,
          currentPage: (latestSlideNumber + 1),
          maxPage: (maxPage - 1),
          expirationDate: expirationDate
        }
        this.setModuleProgress(payload)
      }
    },

    checkForStart () {
      if (this.currentSlideNumber === 0) {
        this.enableContinue()
        return false
      } else if (this.currentSlideNumber === 1) {
        this.resetScreenPosition()
        return true
      } else {
        return true
      }
    },

    checkForVisitedSlide () {
      if (this.currentSlideNumber < this.latestSlideNumber) {
        this.enableContinue()
      } else {
        this.resetScreenPosition()
      }
    },

    checkForReviewMode () {
      let isReviewMode = this.getCurrentModuleData.progress.is_review
      return isReviewMode
    },

    resetScreenPosition () {
      document.getElementById('app').scrollIntoView()
    },

    returnToDashboard () {
      this.$router.push({ name: 'Dashboard' })
    },

    returnToDemoDashboard () {
      this.$router.push({ name: 'Demo' })
    },

    showTooltip () {
      document.getElementById('tooltip').classList.remove('hidden')
    },

    hideTooltip () {
      document.getElementById('tooltip').classList.add('hidden')
    }
  }
}

</script>
