<template>
  <div class="emailForm col-12">
    <div v-if="surveyResultsEmailWasSubmitted===true" class="alert alert-success transition-350ms">
      <strong>Success!</strong> Email was successfully sent
    </div>
    <div v-if="surveyResultsEmailWasSubmitted===false" class="alert alert-danger transition-350ms">
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
        <h2 v-if="wellnessGoal.length > 0" @click="sendUserSurveyResults" class="module-text__text multiChoiceSurveyResults__mail transition-350ms">
          <i class="fas fa-envelope"></i>
          Email this goal to yourself
        </h2>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'

export default {
  mixins: [awaitTimeBeforeContinue],

  data () {
    return {
      drug: 'alcohol',
      wellnessGoal: ''
    }
  },

  mounted () {
    this.enableContinue()
  },

  computed: {
    ...mapGetters(
      [
        'surveyResultsEmailWasSubmitted',
        'getCurrentModule',
        'currentSlideData'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'emailSurveyResults',
        'enableContinue'
      ]
    ),

    sendUserSurveyResults () {
      let formattedWellnessResults = `
        <p>Wellness goal from <b>${this.getCurrentModule}</b> module...</p>
        <p>${this.wellnessGoal}</p>`

      this.emailSurveyResults(formattedWellnessResults)
    }
  }
}
</script>
