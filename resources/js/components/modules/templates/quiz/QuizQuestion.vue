<template>
  <div class="col-12">
    <div class="module-quiz__question">
      <h1>{{ object.question }}</h1>
    </div>
    <div class="row">
      <div class="module-quiz__option-container col-sm-6 col-12" v-for="(element, id) in options" :key="id">
        <div @click="showResponse" class="module-quiz__option">
          <div :class="[(object.showResponse ? 'module-quiz__option-indicator--active' : ''), 'module-quiz__option-indicator']">
            <i v-if="element.isAnswer" class="fas fa-check-circle"></i>
            <i v-else class="fas fa-times-circle"></i>
          </div>

          <div :class="[(object.showResponse ? 'module-quiz__option-content--active' : ''), 'module-quiz__option-content']">
            <img :src="element.img.src" :alt="element.img.alt">
            <div v-html="element.text"></div>

            <div :class="[(object.showResponse ? 'module-quiz__response--active' : ''), 'module-quiz__response']">
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
import { mapActions } from 'vuex'
export default {
  props: [
    'object',
    'options',
    'slideNumber',
    'index'
  ],

  methods: {
    ...mapActions(
      [
        'updateResponse',
        'allowUserToContinue'
      ]
    ),

    showResponse () {
      this.updateResponse({ currentSlideIndex: parseInt(this.slideNumber), currentQuestionIndex: parseInt(this.index) })
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    }
  }
}
</script>
