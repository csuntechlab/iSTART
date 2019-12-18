<template>
  <footer class="module-footer">
    <div v-if="checkForStart()" class="module-footer__item-left module-footer__item">
      <button @click="slideBack" class="module-footer__button button button-primary text-right text-md-center">
        <i class="fas fa-chevron-left"></i>
        Back
      </button>
    </div>
    <!-- If review mode -->
    <div v-if="checkForReviewMode && !checkForEnd" class="module-footer__item-right module-footer__item">
      <button @click="slideForward" class="module-footer__button button button-primary text-left text-md-center">
        Next
        <svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
          <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
        </svg>
      </button>
    </div>
    <div v-else-if="!checkForEnd" class="module-footer__item-right module-footer__item">
      <!-- If next button is enabled -->
      <button v-if="isContinueButtonEnabled" @click="slideForward" class="module-footer__button button button-primary text-left text-md-center">
        Next
        <svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
          <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
        </svg>
      </button>
      <!-- If next button not enabled -->
      <div v-else>
        <div id="tooltip" class="module-footer__tooltip hidden">
          {{ currentSlideData.header.tooltip }}
        </div>
        <button @click="showTooltip" @mouseover="showTooltip" @mouseout="hideTooltip" class="module-footer__button button button-primary--disabled text-left text-md-center">
          Next
        </button>
      </div>
    </div>
    <!-- If end of content -->
    <div v-if="checkForEnd" class="module-footer__item-right module-footer__item module-footer__item-return">
      <button @click="returnToDashboard" class="module-footer__button button button-primary">
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

      if ((currentSlideNumber === latestSlideNumber) && !this.checkForReviewMode) {
        let payload = {
          userId: userId,
          moduleName: moduleName,
          currentPage: (latestSlideNumber + 1),
          maxPage: (maxPage - 1)
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

    showTooltip () {
      document.getElementById('tooltip').classList.remove('hidden')
    },

    hideTooltip () {
      document.getElementById('tooltip').classList.add('hidden')
    }
  }
}

</script>
