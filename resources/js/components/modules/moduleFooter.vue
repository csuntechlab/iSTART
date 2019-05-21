<template>
  <div class="module-footer__background">
    <div class="row">
      <div :class="width >= 768 ? 'text-right' : 'text-left'" class="col-6">
        <button @click="goBack()" :class="width >= 768 ? 'btn btn-primary mr-3 module__footerText' : 'module__footerText module__footerText--left text-left'"><i v-if="width<=768" class="fas fa-chevron-left"></i> Go Back</button>
      </div>
      <div :class="width>= 768 ? 'text-left' : 'text-right'" class="col-6">
        <button  v-if="displayContent" @click="proceedAndHideContent()" :class="width >= 768 ? 'btn btn-primary ml-3 module__footerText' : 'module__footerText module__footerText--right text-right'">
            Continue <i v-if="width<=768" class="fas fa-chevron-right"></i>
        </button>
        <button  v-else :class="width >= 768 ? 'btn btn-primary ml-3 module__footerText' : 'module__footerText module__footerText--right text-right'" disabled>
            Continue <i v-if="width<=768" class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'moduleFooter',
  data () {
    return {
      width: 0,
      current_slide: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleWidthResize)
    this.handleWidthResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWidthResize)
  },
  computed: {
    ...mapState(
      {
        amountOfSlides: state => state.Slides.slides
      }
    ),
    ...mapGetters(
      [
        'displayContent',
        'slideNumber'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'allowUserToContinue'
      ]
    ),
    handleWidthResize () {
      this.width = window.innerWidth
    },
    goBack: function () {
      if (this.current_slide > -1) {
        let payload = {
          isAbleToProceed: true,
          slide_index: this.current_slide -= 1
        }
        this.allowUserToContinue(payload)
      }
    },
    proceedAndHideContent: function () {
      // if(this.current_slide < Object.keys(this.amountOfSlides).length + 1){
      let payload = {
        isAbleToProceed: false,
        slide_index: this.current_slide += 1
      }
      this.allowUserToContinue(payload)
    }
    // }
  },
  mounted () {
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
}

</script>
