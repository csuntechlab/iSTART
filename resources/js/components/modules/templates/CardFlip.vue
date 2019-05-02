<template>
  <div class="media">
    <div class="media__card col-12 col-md-6 col-lg-4" v-for="(item, index) in slides.slide1.content" :key="index">
      <div @click="item.show=!item.show" v-bind:class="[item.show ? 'media__card--active' : '', 'media__card-wrapper pointer transition-350ms']">
        <div class="media__card-front">
          <figure v-if="item.img.src!=null">
            <img v-bind:src="item.img.src" v-bind:alt="item.img.alt" class="media__card-image">
            <figcaption>{{item.img.caption}}</figcaption>
          </figure>
        </div>
        <div class="media__card-back">
          <h1>{{item.description}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alcohol } from './../data/alcoholSlide.js'

export default {
  mixins: [
    alcohol
  ]
}
</script>
