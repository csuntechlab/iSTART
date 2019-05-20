<template>
  <div class="multiChoiceSurveyResults">
    <h2 class="multiChoiceSurveyResults__heading">
      Based on your 3 answers here is tailored motivational and/or educational 
      advice to follow.
      These are also resources to check out based off your 3 answers.
    </h2>
    <div class="multiChoiceSurveyResults__link-container">
      <ul>
        <li v-for="(url, index) in links" :key="index" class="multiChoiceSurveyResults__link" >
            <a :href="url" target="_blank"> Visit this example link</a>
        </li>
      </ul>
    </div>
    <a @click="emailSurveyResults" class="multiChoiceSurveyResults__mail">
      <i class="fas fa-envelope"></i>
      Email these results to yourself
    </a>
  </div>
  
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import { setTimeout } from 'timers';
export default {
  name: 'MultiChoiceSurveyResults',
  mounted() {
    setTimeout(()=>{
      this.allowUserToContinue(true)
    }, 5000)
  },
  data() {
    return {
      links: [
        'https://www.metalab.csun.edu/',
        'https://www.metalab.csun.edu/',
        'https://www.metalab.csun.edu/'
      ]
    }
  },
  methods: {
    ...mapActions(
        [
          'allowUserToContinue',
        ]
      ),
    emailSurveyResults() {
      this.emailSurveyResults(this.links)
    }
  }, 
  computed: { 
    ...mapGetters(
      [
        'SurveyResultLinks'
      ]
    )
  }
}
</script>
