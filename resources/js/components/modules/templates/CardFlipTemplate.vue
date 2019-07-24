<template>
<div class="card-flip">
  <section class="card-flip-description container">
    <h1 class="card-flip__header">{{ currentSlideData.header.title }}</h1>
    <div v-for="(item, index) in currentSlideData.content.paragraph" :key="index">
      <p v-html="item" class="card-flip__paragraph"></p>
    </div>
    <em>{{ currentSlideData.header.text }}</em>
  </section>
  <div class="card-flip-content mb-5">
    <div class="card-flip__card col-12 col-md-6 col-lg-4" v-for="(item, index) in currentSlideData.content.cards" :key="index">
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
        'updateCardCount'
      ]
    ),

    flipCard (itemIndex, isFlipped) {
      this.updateCard({ currentSlideIndex: parseInt(this.currentSlideNumber), currentCardIndex: parseInt(itemIndex), isFlipped: isFlipped })
    },

    updateCount (number, item) {
      this.updateCardCount({ currentSlideIndex: parseInt(this.currentSlideNumber), number: parseInt(number) })
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
