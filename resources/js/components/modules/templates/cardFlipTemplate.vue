<template>
<div class="card-flip">
  <section class="card-flip-description container">
    <h1>{{content.header}}</h1>
    <p>{{content.description}}</p>
  </section>
  <div class="card-flip-content mb-5">
    <div class="card-flip__card col-12 col-md-6 col-lg-4" v-for="(item, index) in content.cards" :key="index">
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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      cardFlipCount: 0,
      content: {
        header: 'What you shouldn\'t take drugs',
        description: 'Flip over all cards to continue.',
        cards: {
          0: {
            show: false,
            front: {
              img: {
                src: 'images/thumbnail/test.jpg',
                alt: 'city with palmtrees',
                caption: 'California Sunshine'
              },
              question: null
            },
            back: {
              description: 'Don\'t do drugs.'
            }
          },
          1: {
            show: false,
            front: {
              img: {
                src: null,
                alt: null,
                caption: null
              },
              question: 'Why you shouldn\'t do drugs?'
            },
            back: {
              description: 'Drugs are bad.'
            }
          },
          2: {
            show: false,
            front: {
              img: {
                src: 'images/thumbnail/alcohol_thumbnail.jpg',
                alt: 'luxury alcohol with glass',
                caption: 'Alcohol with shots of whiskey'
              },
              question: null
            },
            back: {
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pretium tortor, vitae aliquam urna. Vivamus commodo suscipit risus, sed sagittis tellus. Nam at tortor cursus, semper risus ac, lacinia odio. Morbi vitae mollis diam.'
            }
          }
        }
      }
    }
  },

  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),

    updateCount (number, item) {
      this.cardFlipCount += number
      if (this.cardFlipCount === Object.keys(this.content.cards).length) {
        this.allowUserToContinue(true)
      }
    }
  }
}
</script>
