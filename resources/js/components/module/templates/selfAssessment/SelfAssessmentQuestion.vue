<template>
  <div class="multi-quiz">
    <div class="multi-quiz__question-container" v-for="(questionsElement, questionsIndex) in quiz.questions" :key="`${questionsIndex}`">
      <div v-if="questionsElement.show">
        <div class="multi-quiz__question module-text__question">{{(parseInt(questionsIndex) + 1)}}. {{ questionsElement.question }}</div>
        <div class="multi-quiz-container">
          <div class="multi-quiz__input-container col-12 col-sm-6" v-for="(inputElement, inputIndex) in questionsElement.input" :key="`${inputIndex}`">
            <button type="button" role="button" @click="processInput(quizIndex, questionsIndex, inputIndex, inputElement.redirect)" :class="[(inputElement.selected ? 'active' : ''), 'multi-quiz__input module-text__text interactable-container']">
              {{ inputElement.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'quiz',
    'quizIndex'
  ],
  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'currentSlideNumber'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'enableContinue',
        'disableContinue',
        'updateMultiQuizInput',
        'showMultiQuizQuestion',
        'enableMultiQuizRedirect'
      ]
    ),

    processInput (quizIndex, questionsIndex, inputIndex, redirect) {
      let currentSlideIndex = this.currentSlideNumber

      this.updateSelectedInput({
        currentSlideIndex: currentSlideIndex,
        quizIndex: parseInt(quizIndex),
        questionsIndex: parseInt(questionsIndex),
        inputIndex: parseInt(inputIndex) })

      if (redirect) {
        let questionsLength = Object.keys(this.quiz.questions).length
        this.enableRedirect({
          currentSlideIndex: currentSlideIndex,
          quizIndex: parseInt(quizIndex),
          questionsIndex: parseInt(questionsIndex),
          questionsLength: questionsLength
        })

        let questionResponse = this.quiz.questions[questionsIndex].response
        if ((questionResponse !== null) || (questionResponse !== 'undefined')) {
          this.enableContinue()
        } else {
          this.disableContinue()
        }
      } else {
        this.showNextQuestion({
          currentSlideIndex: currentSlideIndex,
          quizIndex: parseInt(quizIndex),
          questionsIndex: parseInt(questionsIndex),
          inputIndex: parseInt(inputIndex) })

        let questions = this.quiz.questions
        let questionsLength = Object.keys(questions).length

        this.enableContinue()
        for (let i = 0; i < questionsLength; i += 1) {
          if ((questions[i].response === null) || (questions[i].response === 'undefined')) {
            this.disableContinue()
          }
        }
      }
    },

    enableRedirect (currentSlideIndex, quizIndex, questionsIndex, questionsLength) {
      this.enableMultiQuizRedirect(currentSlideIndex, quizIndex, questionsIndex, questionsLength)
    },

    updateSelectedInput (currentSlideIndex, quizIndex, questionsIndex, inputIndex) {
      this.updateMultiQuizInput(currentSlideIndex, quizIndex, questionsIndex, inputIndex)
    },

    showNextQuestion (currentSlideIndex, quizIndex, questionsIndex, inputIndex) {
      this.showMultiQuizQuestion(currentSlideIndex, quizIndex, questionsIndex, inputIndex)
    }
  }
}
</script>
