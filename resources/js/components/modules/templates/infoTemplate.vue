<template>
  <div class="module-info mb-5">
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <h1 class="module-info__header"> {{ current_slide(slideNumber).header.title }}</h1>
          <p v-if="current_slide(slideNumber).header.text"> {{ current_slide(slideNumber).header.text }}</p>
        </div>
      </div>
      <div v-if="current_slide(slideNumber).content.images &&current_slide(slideNumber).format.images ==='top'" class="row mt-3 justify-content-md-center">
        <info-photo v-for="(element, index) in current_slide(slideNumber).content.images"
          :image="element"
          :key="index"
          :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
        </info-photo>
      </div>
      <div class="row mt-3">
        <div v-if="current_slide(slideNumber).content.paragraph" class="col-12">
          <info-content v-for="(element, index) in current_slide(slideNumber).content.paragraph"
            :key="index"
            :paragraph="element"
            :icon="element.icon">
          </info-content>
        </div>
      </div>
      <div v-if="current_slide(slideNumber).format.images && current_slide(slideNumber).format.images ==='bottom'" class="row mt-3 justify-content-md-center">
        <info-photo v-for="(element, index) in current_slide(slideNumber).content.images"
          :image="element"
          :key="index"
          :imageCount="Object.keys(current_slide(slideNumber).content.images).length">
        </info-photo>
      </div>
    </div>
  </div>
</template>
<script>
import infoContent from './info/infoContent'
import infoPhoto from './info/infoPhoto'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    infoContent,
    infoPhoto
  },
  watch: {
    slideNumber (newValue, old) {
      if (this.slideNumber > -1 && this.slideNumber < Object.keys(this.slides).length - 1) {
        this.proceedAndContinue()
      }
    }
  },
  mounted () {
    if (this.slideNumber < 1) {
      this.proceedAndContinue()
    }
  },
  computed: {
    ...mapState(
      {
        slideNumber: state => state.Slides.slide_index,
        slides: state => state.Slides.importedJSONSlides
      }
    ),
    ...mapGetters(
      [
        'current_slide'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),
    proceedAndContinue () {
      setTimeout(function () { this.allowUserToContinue({ isAbleToProceed: true, slide_index: this.slideNumber }) }.bind(this), 5000)
    }
  },
  data () {
    return {
      content: {
        images:
        {
          0: 'images/thumbnail/alcohol_s19_01.jpg',
          1: 'images/thumbnail/alcohol_s19_02.jpg',
          2: 'images/thumbnail/alcohol_s19_03.jpg',
          3: 'images/thumbnail/alcohol_s19_04.jpg'
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
  }
}
</script>
