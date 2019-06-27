<template>
  <div class="col-12">
    <div class="module-quiz__question">
      <h1>{{ object.question }}</h1>
    </div>
    <div class="row">
      <div class="module-quiz__option-container col-sm-6 col-12" v-for="(element, optionIndex) in options" :key="optionIndex">
        <div @click="showResponse(optionIndex)" class="module-quiz__option">
          <div v-if="object.showResponse" :class="[(object.options[optionIndex].show ? 'module-quiz__option-indicator--active' : ''), 'module-quiz__option-indicator']">
            <i :class="[(element.isAnswer ? 'fa-check-circle' : 'fa-times-circle'), 'fa']"></i>
          </div>

          <div :class="[(object.options[optionIndex].show ? 'module-quiz__option-content--active' : ''), 'module-quiz__option-content']">
            <img :src="element.img.src" :alt="element.img.alt">
            <div v-html="element.text"></div>

            <div :class="[(element.show ? 'module-quiz__response--active' : ''), 'module-quiz__response']">
              <div v-html="element.response.text"></div>
              <div class="module-quiz__response-image">
                <img :src="element.response.img.src" :alt="element.response.img.alt">
              </div>
            </div>
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
    'object',
    'options',
    'slideNumber',
    'answer',
    'index'
  ],

  computed: {
    ...mapGetters(
      [
        'currentSlideNumber'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'updateResponse',
        'enableContinue'
      ]
    ),

    showResponse (optionIndex) {
      this.updateResponse({ currentSlideIndex: parseInt(this.currentSlideNumber), currentQuestionIndex: parseInt(this.index), currentOptionIndex: parseInt(optionIndex) })
      this.enableContinue()
    }
  }
}
</script>
