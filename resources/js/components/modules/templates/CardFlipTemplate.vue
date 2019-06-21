<template>
<div class="card-flip">
  <section class="card-flip-description container">
    <h1 class="card-flip__header">{{ currentSlideData.header.title }}</h1>
    <div class="card-flip__paragraph" v-for="(item, index) in currentSlideData.content.paragraph" :key="index">
      <p v-html="item"></p>
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
  data () {
    return {
      cardFlipCount: 0
    }
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData',
        'currentSlideNumber'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'enableContinue',
        'updateCard'
      ]
    ),

    flipCard (itemIndex, isFlipped) {
      this.updateCard({ currentSlideIndex: parseInt(this.currentSlideNumber), currentCardIndex: parseInt(itemIndex), isFlipped: isFlipped })
    },

    updateCount (number, item) {
      this.cardFlipCount += number
      if (this.cardFlipCount === Object.keys(this.currentSlideData.content.cards).length) {
        this.enableContinue()
      }
    }
  }
}
</script>
