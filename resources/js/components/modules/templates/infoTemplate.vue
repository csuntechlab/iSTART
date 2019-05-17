<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header">Tips for drinking responsibly</h1>
        </div>
      </div>
      <div v-if="content.images" class="row justify-content-md-center">
        <info-photo v-for="(element, index) in content.images"
          :image="element"
          :key="index"
          :imageCount="Object.keys(content.images).length">
        </info-photo>
      </div>
      <div class="row">
        <div class="col-12">
          <info-content v-for="(element, index) in content"
            :key="index"
            :paragraph="element.paragraph"
            :icon="element.icon">
          </info-content>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infoContent from './info/infoContent'
import infoPhoto from './info/infoPhoto'
import { mapActions } from 'vuex'
export default {
  components: {
    infoContent,
    infoPhoto
  },
  created () {
    this.proceedAndContinue()
  },
  data () {
    return {
      content: {
        images:
        {
          0: 'images/thumbnail/alcohol_thumbnail.jpg',
          1: 'images/thumbnail/alcohol_thumbnail.jpg',
          2: 'images/thumbnail/alcohol_thumbnail.jpg',
          3: 'images/thumbnail/alcohol_thumbnail.jpg'
        },
        0: {
          paragraph: 'Dont Drink',
          icon: 'fab fa-accessible-icon'
        },
        1: {
          paragraph: 'Stop drinking',
          icon: 'fas fa-glass-martini'
        },
        2: {
          paragraph: 'Drinking is bad',
          icon: 'fas fa-glass-whiskey'
        },
        3: {
          paragraph: 'Drinking and driving is bad',
          icon: 'fas fa-beer'
        },
        4: {
          paragraph: 'Dawg why you drinking',
          icon: 'fas fa-dizzy'
        },
        5: {
          paragraph: 'Getting your BAC levels above 0.8 can get you a ticket',
          icon: 'fas fa-dizzy'
        },
        6: {
          paragraph: 'Ya mama gon be mad',
          icon: 'fas fa-dizzy'
        },
        7: {
          paragraph: '1 beer is equivalent to a shot of tequila',
          icon: 'fas fa-dizzy'
        },
        8: {
          paragraph: 'Always have a DD if you drinking',
          icon: 'fas fa-dizzy'
        },
        9: {
          paragraph: 'Always have a DD if you drinking Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quidem beatae qui tempores voluptates nesciunt quaerat similique eum ratione omnis non veniam dolorem est accusamus aliquid quo, alias obcaecati iure.'
        },
        10: {
          paragraph: 'Always have a DD if you drinking Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quidem beatae qui tempores voluptates nesciunt quaerat similique eum ratione omnis non veniam dolorem est accusamus aliquid quo, alias obcaecati iure.'
        },
        11: {
          paragraph: 'Always have <br> a DD if you drinking Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quidem beatae qui tempores voluptates nesciunt quaerat similique eum ratione omnis non veniam dolorem est accusamus aliquid quo, alias obcaecati iure.'
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
    proceedAndContinue () {
      setTimeout(function () { this.allowUserToContinue(true) }.bind(this), 5000)
    }
  }
}
</script>
