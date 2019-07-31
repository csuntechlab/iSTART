<template>
  <div class="module-quizInput">
    <div class="container mt-5">
      <h1 class="module-quizInput__header">{{ currentSlideData.header.title }}</h1>
      <div class="row mb-5">
        <div class="col-12">
          <p class="module-quizInput__validate--green module-quizInput__validate">Please enter your respsone using numerical values 0 to 100.</p>
        </div>
        <form class="module-quizInput__form" novalidate="true">
          <input-response v-for="(element, index) in currentSlideData.content.questions"
            :key="index"
            :questionIndex="parseInt(index)+1"
            :question="element.question"
            :user_response="element.response"
            :questionLength="Object.keys(currentSlideData.content.questions).length"
            :needInputLabel="true">
          </input-response>
        </form>
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
