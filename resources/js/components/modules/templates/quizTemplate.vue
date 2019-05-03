<template>
  <div class="module-quiz">
    <div class="row">
      <div class="col-12">
        <div class="module-quiz__header">
          <h2 class="module-quiz__header-font">Let’s see what you think - Taking two shots of tequila is the same as which of the following: </h2>
        </div>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">
      <quiz-option v-for="(element, id)  in optionsObject"
        :image="element.image"
        :option="element.option"
        :key="id"
        :optionID="id">
      </quiz-option>
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
      optionsObject: {
        0: {
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          option: 'Some option bro'
        },
        1: {
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          option: 'another option bro'
        },
        2: {
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          option: 'another another option bro'
        },
        3: {
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          option: 'another another another option bro'
        }
      }
    }
  }
}
</script>
