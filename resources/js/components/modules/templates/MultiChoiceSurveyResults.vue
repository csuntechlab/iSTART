<template>
  <div class="multiChoiceSurveyResults">
    <div v-if="surveyResultsEmailWasSubmitted===true" class="alert alert-success transition-350ms">
      <strong>Success!</strong> Email was successfully sent
    </div>
    <div v-if="surveyResultsEmailWasSubmitted===false" class="alert alert-danger transition-350ms">
      <strong>Failure. </strong> An error has occured
    </div>

    <h2 class="multiChoiceSurveyResults__heading">
      Based on your 3 answers here is tailored motivational and/or educational
      advice to follow.
      These are also resources to check out based off your 3 answers.
    </h2>
    <div class="multiChoiceSurveyResults__link-container">
      <ul>
        <li v-for="(url, index) in surveyResultLinks" :key="index" class="multiChoiceSurveyResults__link" >
            <a :href="url" target="_blank"> Visit this example link</a>
        </li>
      </ul>
    </div>
    <h2 @click="sendUserSurveyResults" class="multiChoiceSurveyResults__mail">
      <i class="fas fa-envelope"></i>
      Email these results to yourself
    </h2>
  </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { setTimeout } from 'timers'
export default {
  name: 'MultiChoiceSurveyResults',
  mounted () {
    setTimeout(() => {
      this.allowUserToContinue(true)
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
      this.emailSurveyResults(this.surveyResultLinks)
    }
  },
  computed: {
    ...mapGetters(
      [
        'surveyResultLinks',
        'surveyResultsEmailWasSubmitted'
      ]
    )
  }
}
</script>
