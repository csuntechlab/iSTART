<template>
  <div class="module-footer__background">
    <div class="row">
      <div :class="width >= 768 ? 'text-right' : 'text-left'" class="col-6">
        <router-link :class="width >= 768 ? 'btn btn-primary mr-3 module__footerText' : 'module__footerText module__footerText--left text-left'" to="/"><i v-if="width<=768" class="fas fa-chevron-left"></i> Go Back</router-link>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'moduleFooter',
  data () {
    return {
      width: 0,
      isDisabled: true,
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
    ...mapGetters(
      [
        'displayContent'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'toggleContent'
      ]
    ),
    handleWidthResize () {
      this.width = window.innerWidth
    },
    proceedAndHideContent: function () {
      this.toggleContent(false)
      this.current_slide += 1
    }
  },
  mounted () {
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
}
</script>
