<template>
  <div class="module-quiz">
    <div class="row">
      <div class="col-12">
        <div class="module-quiz__header">
          <h2 class="module-quiz__header-font">Let’s see what you think - Taking two shots of tequila is the same as which of the following: </h2>
        </div>
      </div>
    </div>
    <div class="module-quiz__body">
      <div class="module-quiz__options">
        <div class="row">
          <quiz-option v-for="(option, id) in options" :option_number="option" :key="id"></quiz-option>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quizOption from './quizOption'
export default {
  name: 'quizTemplate',
  components: {
    quizOption
  },
  data () {
    return {
      options: [1, 2, 3, 4]
    }
  }
}
</script>
