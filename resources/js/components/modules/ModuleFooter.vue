<template>
  <div class="module-footer">
    <span v-if="checkForStart()" class="module-footer__item">
      <button @click="slideBack" class="module-footer__button button button-primary">Back</button>
    </span>
    <span v-if="checkForEnd()" class="module-footer__item">
      <button v-if="isContinueButtonEnabled" @click="slideForward" class="module-footer__button button button-primary">Continue</button>
      <button v-else class="module-footer__button button button-primary--disabled">Continue</button>
    </span>
    <span v-else class="module-footer__item">
      <button @click="returnToDashboard" class="module-footer__button button button-primary">Return to Dashboard</button>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      [
        'isContinueButtonEnabled',
        'isBackButtonEnabled',
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
        'enableContinue'
      ]
    ),

    slideForward () {
      this.resetSlideNavigation()
      this.navigateFromSlide('forward')
      this.checkForVisitedSlide()
    },

    slideBack () {
      this.resetSlideNavigation()
      this.navigateFromSlide('back')
      this.checkForVisitedSlide()
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
    }
  }
}

</script>
