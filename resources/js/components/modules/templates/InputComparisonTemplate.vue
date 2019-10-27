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
            <ol class="module-module-quizInput__form row" novalidate="true">
              <input-response v-for="(element, index) in currentSlideData.content.questions"
                :key="index"
                :questionIndex="parseInt(index)+1"
                :question="element.question"
                :user_response="element.response"
                :questionLength="Object.keys(currentSlideData.content.questions).length"
                :needInputLabel="true">
              </input-response>
            </ol>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  },

  methods: {
    ...mapActions(
      [
        'getUserResponses'
      ]
    )
  }
}
</script>
