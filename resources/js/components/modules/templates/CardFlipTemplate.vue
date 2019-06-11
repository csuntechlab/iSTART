<template>
<div class="card-flip">
  <section class="card-flip-description container">
    <h1 class="card-flip__header">{{ current_slide(slideNumber).header.title }}</h1>
    <div class="card-flip__paragraph" v-for="(item, index) in current_slide(slideNumber).content.paragraph" :key="index">
      <p v-html="item"></p>
    </div>
    <em>{{ current_slide(slideNumber).header.text }}</em>
  </section>
  <div class="card-flip-content mb-5">
    <div class="card-flip__card col-12 col-md-6 col-lg-4" v-for="(item, index) in current_slide(slideNumber).content.cards" :key="index">
      <div @click="flipCard(index, item.show); item.show ? updateCount(1) : updateCount(-1)" v-bind:class="[item.show ? 'card-flip__card--active' : '', 'card-flip__card-wrapper pointer transition-350ms']">
        <div class="card-flip__card-front">
          <figure v-if="item.front.img.src!=null">
            <figcaption class="card-flip__card-caption">{{item.front.img.caption}}</figcaption>
            <img v-bind:src="item.front.img.src" v-bind:alt="item.front.img.alt" class="card-flip__card-image">
          </figure>
          <section v-if="item.front.question!=null">
            {{item.front.question}}
          </section>
        </div>
        <div class="card-flip__card-back">
          <h1 v-html="item.back.description"></h1>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      cardFlipCount: 0
    }
  },

  computed: {
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),
    ...mapGetters(
      [
        'current_slide'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue',
        'updateCard'
      ]
    ),

    flipCard (itemIndex, isFlipped) {
      this.updateCard({ currentSlideIndex: parseInt(this.slideNumber), currentCardIndex: parseInt(itemIndex), isFlipped: isFlipped })
    },

    proceedAndContinue () {
      this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber })
    },

    updateCount (number, item) {
      this.cardFlipCount += number
      if (this.cardFlipCount === Object.keys(this.current_slide(this.slideNumber).content.cards).length) {
        this.proceedAndContinue()
      }
    }
  }
}
</script>
