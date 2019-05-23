<template>
  <div class="multiChoiceSurvey">
    <h1 class="multiChoiceSurvey__question ml-4 mr-4 mt-4 mb-5">{{question}}</h1>
    <div class="row multiChoiceSurvey__option-container justify-content-center ml-2 mt-202:05 PM mr-2" >
      <div v-for="(choice, index) in choices" :key="index" class="col-12 col-sm-5 mb-3" @click="enableContinue(index)">
        <div :class="[currentChoiceIndex===index ? 'multiChoiceSurvey__option--selected transition-350ms' : 'multiChoiceSurvey__option transition-350ms']">
          <h2 class="multiChoiceSurvey__text p-6">{{choice}}, {{index}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MultipleChoiceSurvey',
  data () {
    return {
      question: '1. How often did you have a drink containing alcohol in the past year?',
      currentChoiceIndex: -1,
      choices:
        ['Never',
          'Rarely',
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    enableContinue (index) {
      this.currentChoiceIndex = index
      this.allowUserToContinue(true)
    }
  }
}
</script>
