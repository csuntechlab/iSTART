<template>
  <div class="module-info mb-5 col-12">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h1 v-if="currentSlideData.header.header && currentSlideData.header.header !== null" class="module-info__header module-text__header">
              {{ currentSlideData.header.header }}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="module-info__content col-12">
            <h2 class="module-text__text" v-if="currentSlideData.header.sub_header && currentSlideData.header.sub_header !== null" v-html="currentSlideData.header.sub_header"></h2>
          </div>
        </div>
        <template v-for="(element, currentSlideIndex) in currentSlideData.content">
          <paragraph
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].paragraph"
            :paragraph="currentSlideData.content[`${currentSlideIndex}`].paragraph"/>
          <photo
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image"
            :image="currentSlideData.content[`${currentSlideIndex}`].image"/>
          <self-assessment-question
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].quiz"
            :quiz="currentSlideData.content[`${currentSlideIndex}`].quiz"
            :quizIndex="currentSlideIndex"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Paragraph from './shared/Paragraph'
import Photo from './shared/Photo'
import SelfAssessmentQuestion from './selfAssessment/SelfAssessmentQuestion'

export default {
  components: {
    SelfAssessmentQuestion,
    Paragraph,
    Photo
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
