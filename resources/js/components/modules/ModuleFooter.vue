<template>
  <footer class="module-footer">
    <div v-if="checkForStart()" class="module-footer__item-left module-footer__item">
      <button @click="slideBack" class="module-footer__button button button-primary text-right text-md-center">
        <i class="fas fa-chevron-left"></i>
        Back
      </button>
    </div>
    <div v-if="checkForEnd()" class="module-footer__item-right module-footer__item">
      <button v-if="isContinueButtonEnabled" @click="slideForward" class="module-footer__button button button-primary text-left text-md-center">
        Next
        <!-- <i v-if="this.currentSlideNumber != this.totalSlides - 1" class="fas fa-chevron-right"></i> -->
      </button>
      <div v-else>
        <div id="tooltip" class="module-footer__tooltip hidden">
          {{ currentSlideData.header.tooltip }}
        </div>
        <button @click="showTooltip" @mouseover="showTooltip" @mouseout="hideTooltip" class="module-footer__button button button-primary--disabled text-left text-md-center">
          Next
        </button>
      </div>
    </div>
    <div v-else class="module-footer__item-right module-footer__item module-footer__item-return">
      <button @click="returnToDashboard" class="module-footer__button button button-primary">
        Return to Dashboard
      </button>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      [
        'isContinueButtonEnabled',
        'isBackButtonEnabled',
        'isSlideContentVisible',
        'currentSlideData',
        'currentSlideNumber',
        'latestSlideNumber',
        'totalSlides'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'navigateFromSlide',
        'resetSlideNavigation',
        'setSlideContentVisibility',
        'enableContinue'
      ]
    ),

    slideForward () {
      this.setSlideContentVisibility(false)
      this.resetSlideNavigation()
      this.navigateFromSlide('forward')
      this.setSlideContentVisibility(true)
      this.checkForVisitedSlide()
      this.goToTop()
    },

    slideBack () {
      this.setSlideContentVisibility(false)
      this.resetSlideNavigation()
      this.navigateFromSlide('back')
      this.setSlideContentVisibility(true)
      this.checkForVisitedSlide()
      this.goToTop()
    },

    checkForStart () {
      if (this.currentSlideNumber === 0) {
        this.enableContinue()
        return false
      } else {
        return true
      }
    },

    checkForEnd () {
      if (this.currentSlideNumber === (this.totalSlides - 1)) {
        return false
      } else {
        return true
      }
    },

    checkForVisitedSlide () {
      if (this.currentSlideNumber < this.latestSlideNumber) {
        this.enableContinue()
      }
    },

    returnToDashboard () {
      this.$router.push({ name: 'Dashboard' })
    },

    showTooltip () {
      document.getElementById('tooltip').classList.remove('hidden')
    },

    hideTooltip () {
      document.getElementById('tooltip').classList.add('hidden')
    },

    goToTop () {
      window.scrollTo({
        top: 0
      })
    }
  }
}

</script>
