<template>
  <div class="media">
    <div class="media__card col-12 col-md-6 col-lg-4" v-for="(item, index) in slide.card" :key="index">
      <div @click="item.show=!item.show" v-bind:class="[item.show ? 'media__card--active' : '', 'media__card-wrapper pointer transition-350ms']">
        <div class="media__card--front">
          <img v-bind:src="item.imgSrc" v-bind:alt="item.altText" class="media__card-image">
        </div>
        <div class="media__card--back">
          <h1>{{item.description}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alcohol } from './../data/alcohol.js'

export default {
  mixins: [
    alcohol
  ]
}
</script>
