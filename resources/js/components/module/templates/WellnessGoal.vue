<template>
  <div class="emailForm col-12">
    <div v-if="wasWellnessGoalEmailSubmitted === true" class="alert alert-success transition-350ms">
      <strong>Success!</strong> Email was successfully sent
    </div>
    <div v-else-if="wasWellnessGoalEmailSubmitted === false" class="alert alert-danger transition-350ms">
      <strong>Failure. </strong> An error has occured
    </div>
    <h1 class="module-text__header">{{ currentSlideData.header.header }}</h1>
    <h2 class="module-text__sub-header" v-html="currentSlideData.header.sub_header"></h2>
    <form>
      <div class="emailForm__text-area-container">
        <textarea
        class="module-text__text emailForm__text-area form-control"
        :placeholder="currentSlideData.content.textAreaPlaceHolder"
        v-model="wellnessGoal"
        ></textarea>
        <h2 v-if="(wellnessGoal.length > 0) && !wasWellnessGoalEmailSubmitted && !isDemoModeEnabled" @click="sendWellnessGoal" class="module-text__text multiChoiceSurveyResults__mail transition-350ms">
          <i class="fas fa-envelope"></i>
          Email this goal to yourself
        </h2>
      </div>
      <loading v-if="isWellnessGoalLoading"/>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import Loading from './../../global/Loading'

export default {
  mixins: [awaitTimeBeforeContinue],

  components: {
    Loading
  },

  data () {
    return {
      wellnessGoal: ''
    }
  },

  mounted () {
    this.enableContinue()
  },

  computed: {
    ...mapGetters(
      [
        'isDemoModeEnabled',
        'wasWellnessGoalEmailSubmitted',
        'isWellnessGoalLoading',
        'getCurrentModule',
        'currentSlideData'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'emailWellnessGoal',
        'enableContinue'
      ]
    ),

    sendWellnessGoal () {
      let wellnessGoalPayload = `
        <p>Wellness goal from <b>${this.getCurrentModule}</b> module...</p>
        <p>"${this.wellnessGoal}"</p>`

      this.emailWellnessGoal(wellnessGoalPayload)
    }
  }
}
</script>
