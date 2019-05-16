<template>
<div class="card-flip">
  <section class="card-flip-description container">
    <h1>{{slides.slide1.content.header}}</h1>
    <p>{{slides.slide1.content.description}}</p>
  </section>
  <div class="card-flip-content">
    <div class="card-flip__card col-12 col-md-6 col-lg-4" v-for="(item, index) in slides.slide1.content.cards" :key="index">
      <div @click="item.show=!item.show; item.show ? updateCount(1) : updateCount(-1)" v-bind:class="[item.show ? 'card-flip__card--active' : '', 'card-flip__card-wrapper pointer transition-350ms']">
        <div class="card-flip__card-front">
          <figure v-if="item.front.img.src!=null">
            <img v-bind:src="item.front.img.src" v-bind:alt="item.front.img.alt" class="card-flip__card-image">
            <figcaption>{{item.front.img.caption}}</figcaption>
          </figure>
          <section v-if="item.front.question!=null">
            {{item.front.question}}
          </section>
        </div>
        <div class="card-flip__card-back">
          <h1>{{item.back.description}}</h1>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { alcoholSlide } from './../data/alcoholSlide.js'

export default {
  mixins: [
    alcoholSlide
  ],

  data () {
    return {
      cardFlipCount: 0
    }
  },

  methods: {
    updateCount (number, item) {
      this.cardFlipCount += number
      if (this.cardFlipCount === Object.keys(this.slides.slide1.content.cards).length) {
        // call continue action
      }
    }
  }
}
</script>
