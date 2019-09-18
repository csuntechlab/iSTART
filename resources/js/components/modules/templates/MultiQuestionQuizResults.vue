<template>
  <div class="module-info mb-5 col-12">
    <div class="row mt-3">
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
          <info-paragraph
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].paragraph"
            :paragraph="currentSlideData.content[`${currentSlideIndex}`].paragraph"/>
          <info-photo
            :key="`${currentSlideIndex}`"
            v-if="currentSlideData.content[`${currentSlideIndex}`].image"
            :image="currentSlideData.content[`${currentSlideIndex}`].image"/>
        </template>
        <ul>
          <li v-if="(currentSlideData.header.results.case.andAll === true) && (currentSlideData.header.results.case.isAndMet === true)">
            {{ currentSlideData.header.results.case.caseResponse }}
          </li>
          <li v-else-if="(currentSlideData.header.results.case.orAll === true) && (currentSlideData.header.results.case.isOrMet === true)">
            {{ currentSlideData.header.results.case.caseResponse }}
          </li>
          <div v-else>
            <div class="module-text__list" v-for="(item, id) in currentSlideData.header.results.responses" :key="id">
              <li v-if="(item.response !== null)">
                {{ item.response }}
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'

import InfoParagraph from './info/InfoParagraph'
import InfoPhoto from './info/InfoPhoto'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    InfoParagraph,
    InfoPhoto
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'currentSlideNumber',
        'getSlideData'
      ]
    )
  },

  mounted () {
    this.storePreviousSlideData()
    this.checkAndCase()
    this.checkOrCase()
  },

  methods: {
    ...mapActions(
      [
        'storeQuizResponses',
        'checkMultiQuizAndCriteria',
        'checkMultiQuizOrCriteria'
      ]
    ),

    storePreviousSlideData () {
      let previousSlideData = this.getSlideData(this.currentSlideNumber - 1).content
      let previousSlideLength = Object.keys(this.getSlideData(this.currentSlideNumber - 1).content).length
      for (let i = 0; i < previousSlideLength; i += 1) {
        if (previousSlideData[i].quiz) {
          this.storeQuizResponses({
            currentSlideIndex: this.currentSlideNumber,
            previousSlideData: previousSlideData[i].quiz.questions })
        }
      }
    },

    checkAndCase () {
      this.checkMultiQuizAndCriteria({
        currentSlideIndex: this.currentSlideNumber })
    },

    checkOrCase () {
      this.checkMultiQuizOrCriteria({
        currentSlideIndex: this.currentSlideNumber })
    }
  }
}
</script>
