<template>
  <div class="module-quizInput">
    <div class="container">
      <h1 class="module-text__header">{{ currentSlideData.header.header }}</h1>
      <h2 class="module-text__sub-header">{{ currentSlideData.header.sub_header }}</h2>
      <div class="row">
        <div class="col-12">
          <p class="module-quizInput__validate--green module-quizInput__validate">Please enter your response using numerical values 0 to 100.</p>
        </div>
        <div class="col-12">
          <form onsubmit="return false">
            <ol class="row" novalidate="true">
              <input-response v-for="(element, index) in currentSlideData.content.questions"
                :key="`${index}`"
                :question="element.question"
                :questionIndex="index"
                :totalQuestions="Object.keys(currentSlideData.content.questions).length"
                :hasResponded="element.hasResponded"
                :isValidated="element.isValidated"
                :object="element">
              </input-response>
            </ol>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputResponse from './../templates/input/InputResponse'

export default {
  components: {
    InputResponse
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData'
      ]
    )
  }
}
</script>
