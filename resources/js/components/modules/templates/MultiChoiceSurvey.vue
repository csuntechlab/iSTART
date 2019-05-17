<template>
  <div class="multiChoiceSurvey">
    <h1 class="multiChoiceSurvey__question ml-4 mr-4 mt-4 mb-4">{{question}}</h1>
    <div class="row multiChoiceSurvey__option-container justify-content-center m-2" >
      <div v-for="(choice, index) in choices" :key="index" class="col-12 col-sm-5" @click="enableContinue(index)">
        <div class="module-quiz__option">
          <h2 class="multiChoiceSurvey__text p-6">{{choice}}, {{index}}
          </h2>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'MultipleChoiceSurvey',
  data() {
    return {
      question: '1. How often did you have a drink containing alcohol in the past year?',
      choices: 
        ['Never', 
        'Rarely',
        'Frequently',
        'Every Day'
        ]
    }
  },
  computed: {
    ...mapGetters(
      [
        'displayContent'
      ]
    )
  },
  methods: {
      ...mapActions(
        [
          'allowUserToContinue'
        ]
      ),
      enableContinue(index) {
        this.allowUserToContinue(true)
      }
    }
}
</script>
