<template>
  <div class="emailForm">
    <h2 class="emailForm__heading">
      Set a wellness goal that you would like to achieve and progress while 
      reducing your {{drug}} consumption:
    </h2>
    <form>
      <div class="form-group">
        <textarea 
        class="emailForm__text-area form-control" 
        placeholder="i.e. I would like to go hiking with my friends on weekend mornings and I can do this by drinking less on Friday nights"
        v-model="wellnessGoal"
        ></textarea>
        <h2 @click="sendUserSurveyResults" class="multiChoiceSurveyResults__mail">
          <i class="fas fa-envelope"></i>
          Email these results to yourself
        </h2>
      </div>
    </form>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      drug: 'alcohol',
      wellnessGoal: ''
    }
  },
  mounted() {
    setTimeout(()=>{
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
    sendUserSurveyResults() {
      var formattedWellnessResults = `<p>${this.wellnessGoal}</p>`
      this.emailSurveyResults(formattedWellnessResults)
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
