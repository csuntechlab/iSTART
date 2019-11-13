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
        </template>
        <section>
          <div v-html="currentSlideData.header.results.case.yes.andResponse" v-if="(currentSlideData.header.results.case.yes.andAll === true) && (currentSlideData.header.results.case.yes.isAndMet === true)"></div>
          <div v-html="currentSlideData.header.results.case.no.andResponse" v-else-if="(currentSlideData.header.results.case.no.andAll === true) && (currentSlideData.header.results.case.no.isAndMet === true)"></div>
          <div v-html="currentSlideData.header.results.case.yes.orResponse" v-else-if="(currentSlideData.header.results.case.yes.orAll === true) && (currentSlideData.header.results.case.yes.isOrMet === true)"></div>
          <div v-html="currentSlideData.header.results.case.no.orResponse" v-else-if="(currentSlideData.header.results.case.no.orAll === true) && (currentSlideData.header.results.case.no.isOrMet === true)"></div>
          <div v-else>
            <div class="module-text__list" v-for="(item, id) in currentSlideData.header.results.responses" :key="id">
              <div v-if="(item.response !== null) && (item.response.length !== 0)" v-html="item.response"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'

import Paragraph from './shared/Paragraph'
import Photo from './shared/Photo'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    Paragraph,
    Photo
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
        'checkMultiQuizYesAndCriteria',
        'checkMultiQuizNoAndCriteria',
        'checkMultiQuizYesOrCriteria',
        'checkMultiQuizNoOrCriteria'
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
      this.checkMultiQuizYesAndCriteria({
        currentSlideIndex: this.currentSlideNumber })
      this.checkMultiQuizNoAndCriteria({
        currentSlideIndex: this.currentSlideNumber })
    },

    checkOrCase () {
      this.checkMultiQuizYesOrCriteria({
        currentSlideIndex: this.currentSlideNumber })
      this.checkMultiQuizNoOrCriteria({
        currentSlideIndex: this.currentSlideNumber })
    }
  }
}
</script>
