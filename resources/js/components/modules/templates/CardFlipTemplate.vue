<template>
<div class="card-flip">
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 v-if="currentSlideData.header.header !== null" class="module-text__header">{{ currentSlideData.header.header }}</h1>
        <h2 v-if="currentSlideData.header.sub_header !== null" class="module-text__sub-header">{{ currentSlideData.header.sub_header }}</h2>
      </div>
      <div class="col-12" v-for="(item, index) in currentSlideData.content.paragraph" :key="index">
        <p v-if="currentSlideData.content.paragraph !== null" v-html="item" class="module-text__text"></p>
      </div>
    </div>
  </section>
  <div class="card-flip-content mb-5">
    <div :class="[(currentSlideData.content.card_break ? 'col-12' : 'col-12 col-md-6'), 'card-flip__card']" v-for="(item, index) in currentSlideData.content.cards" :key="index">
      <div @click="flipCard(index, item.show); checkForCardsFlipped()" v-bind:class="[item.show ? 'card-flip__card--active' : '', 'card-flip__card-wrapper transition-350ms']">
        <div class="card-flip__card-front interactable-container">
          <figure v-if="item.front.img.src !== null">
            <figcaption class="card-flip__card-caption">{{item.front.img.caption}}</figcaption>
            <img v-bind:src="item.front.img.src" v-bind:alt="item.front.img.alt" class="card-flip__card-image">
          </figure>
          <section v-if="item.front.question !== null">
            {{item.front.question}}
          </section>
        </div>
        <div class="card-flip__card-back interactable-container">
          <p class="module-text__text" v-html="item.back.description"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'currentSlideNumber'
      ]
    )
  },

  mounted () {
    this.checkIfCardsFlipped()
  },

  updated () {
    this.checkIfCardsFlipped()
  },

  methods: {
    ...mapActions(
      [
        'enableContinue',
        'updateCard',
        'checkCardFlips'
      ]
    ),

    flipCard (itemIndex, isFlipped) {
      this.updateCard({ currentSlideIndex: parseInt(this.currentSlideNumber), currentCardIndex: parseInt(itemIndex), isFlipped: isFlipped })
    },

    checkForCardsFlipped () {
      this.checkCardFlips({ currentSlideIndex: parseInt(this.currentSlideNumber) })
    },

    checkIfCardsFlipped () {
      let isAllCardsFlipped = this.currentSlideData.content.cards_flipped

      if (isAllCardsFlipped) {
        this.enableContinue()
      }
    }
  }
}
</script>
