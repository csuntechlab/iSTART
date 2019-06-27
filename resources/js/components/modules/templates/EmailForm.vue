<template>
  <div class="emailForm">
    <div v-if="surveyResultsEmailWasSubmitted===true" class="alert alert-success transition-350ms">
      <strong>Success!</strong> Email was successfully sent
    </div>
    <div v-if="surveyResultsEmailWasSubmitted===false" class="alert alert-danger transition-350ms">
      <strong>Failure. </strong> An error has occured
    </div>
    <h2 class="emailForm__heading">
      {{currentSlideData.header.title}}
    </h2>
    <info-content v-for="(element, index) in currentSlideData.content.paragraph"
      :key="index"
      :paragraph="element"
      :icon="element.icon">
    </info-content>
    <form>
      <div class="form-group">
        <textarea
        class="emailForm__text-area form-control"
        placeholder="e.g. I would like to go hiking with my friends on weekend mornings and I can do this by drinking less on Friday nights"
        v-model="wellnessGoal"
        ></textarea>
        <h2 v-if="wellnessGoal.length > 0" @click="sendUserSurveyResults" class="multiChoiceSurveyResults__mail transition-350ms">
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
import InfoContent from './info/InfoContent'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoContent
  },

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
        'surveyResultLinks',
        'surveyResultsEmailWasSubmitted',
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
      var formattedWellnessResults = `<p>${this.wellnessGoal}</p>`
      this.emailSurveyResults(formattedWellnessResults)
    }
  }
}
</script>
