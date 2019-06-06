<template>
  <div class="emailForm">
    <div v-if="surveyResultsEmailWasSubmitted===true" class="alert alert-success transition-350ms">
      <strong>Success!</strong> Email was successfully sent
    </div>
    <div v-if="surveyResultsEmailWasSubmitted===false" class="alert alert-danger transition-350ms">
      <strong>Failure. </strong> An error has occured
    </div>
    <h2 class="emailForm__heading">
      {{current_slide(slideNumber).header.title}}
    </h2>
    <info-content v-for="(element, index) in current_slide(slideNumber).content.paragraph"
            :key="index"
            :paragraph="element"
            :icon="element.icon">
    </info-content>
    <form>
      <div class="form-group">
        <textarea
        class="emailForm__text-area form-control"
        placeholder="i.e. I would like to go hiking with my friends on weekend mornings and I can do this by drinking less on Friday nights"
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
import { setTimeout } from 'timers'
import infoContent from './info/infoContent'
export default {
  components: {
    infoContent
  },
  data () {
    return {
      drug: 'alcohol',
      wellnessGoal: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    }, 5000)
  },
  methods: {
    ...mapActions(
      [
        'allowUserToContinue',
        'emailSurveyResults'
      ]
    ),
    sendUserSurveyResults () {
      var formattedWellnessResults = `<p>${this.wellnessGoal}</p>`
      this.emailSurveyResults(formattedWellnessResults)
    }
  },
  computed: {
    ...mapGetters(
      [
        'surveyResultLinks',
        'surveyResultsEmailWasSubmitted',
        'current_slide',
        'slideNumber'
      ]
    )
  }
}
</script>
