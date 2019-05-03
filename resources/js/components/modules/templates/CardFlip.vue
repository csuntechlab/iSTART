<template>
  <div class="card-flip">
    <div class="card-flip__card col-12 col-md-6 col-lg-4" v-for="(item, index) in slides.slide1.content" :key="index">
      <div @click="item.show=!item.show" v-bind:class="[item.show ? 'card-flip__card--active' : '', 'card-flip__card-wrapper pointer transition-350ms']">
        <div class="card-flip__card-front">
          <figure v-if="item.img.src!=null">
            <img v-bind:src="item.img.src" v-bind:alt="item.img.alt" class="card-flip__card-image">
            <figcaption>{{item.img.caption}}</figcaption>
          </figure>
          <section v-if="item.question!=null">
            {{item.question}}
          </section>
        </div>
        <div class="card-flip__card-back">
          <h1>{{item.description}}</h1>
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
  ]
}
</script>
