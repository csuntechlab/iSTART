<template>
  <div class="module-quizInput">
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-12">
          <h1>{{ current_slide(slideNumber).header.title }}</h1>
          <p class="module-quizInput__validate--green module-quizInput__validate">Please enter your respsones using numerical values 0 to 100.</p>
        </div>
        <quiz-input v-for="(element, index) in current_slide(slideNumber).content.questions"
          :key="index"
          :questionIndex="parseInt(index)+1"
          :question="element.question"
          :user_response="element.response"
          :questionLength="Object.keys(current_slide(slideNumber).content.questions).length"
          :needInputLabel="true"
          ></quiz-input>
      </div>
    </div>
  </div>
</template>

<script>
import quizInput from './../templates/quiz/quizInput'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'quizInputTemplate',
  components: {
    quizInput
  },
  computed: {
    ...mapState(
      {
        responseFromState: state => state.Slides.responses,
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),
    ...mapGetters(
      [
        'displayContent',
        'userResponses',
        'userValidity',
        'current_slide'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'allowUserToContinue',
        'getUserResponses'
      ]
    )
  }
}
</script>
