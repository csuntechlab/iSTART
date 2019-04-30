<template>
  <div style="height: 100%;">
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
export default {
  data () {
    return {
      slide: {
        number: '1',
        card: {
          'binge drinking yes': {
            show: false,
            imgSrc: 'images/thumbnail/test.jpg',
            altText: 'california sunshine',
            description: 'Drugs? YES'
          },

          'binge drinking': {
            show: false,
            imgSrc: 'images/thumbnail/test.jpg',
            altText: 'california sunshine',
            description: '$5 is $5'
          },

          'binge drinking lol': {
            show: false,
            imgSrc: 'images/thumbnail/test.jpg',
            altText: 'california sunshine',
            description: 'My mommy says I can\'t stay up to long.'
          },

          'binge drinking haha': {
            show: false,
            imgSrc: 'images/thumbnail/test.jpg',
            altText: 'california sunshine',
            description: 'How many drugs did you take? ALL OF IT.'
          }
        }
      }
    }
  }
}
</script>
