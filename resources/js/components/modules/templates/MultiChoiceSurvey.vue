<template>
  <div class="multiChoiceSurvey">
    <h1 class="multiChoiceSurvey__question ml-4 mr-4 mt-4 mb-4">{{question}}</h1>
    <div class="row multiChoiceSurvey__option-container justify-content-center ml-2 mt-202:05 PM mr-2" >
      <div v-for="(choice, index) in choices" :key="index" class="col-12 col-sm-5" @click="enableContinue(index)">
        <div :class="[currentChoiceIndex===index ? 'module-quiz__option--selected transition-350ms' : 'module-quiz__option transition-350ms']">
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
      currentChoiceIndex: -1,
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
        this.currentChoiceIndex = index
        this.allowUserToContinue(true)
      }
  }
}
</script>
