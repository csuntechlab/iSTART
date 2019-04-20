<template>
  <div class="module-footer__background row">
      <div :class="width >= 576 ? 'text-right' : 'text-left'" class="col-6">
        <router-link :class="width >= 576 ? 'btn btn-primary mr-3' : 'module__footerText module__footerText--left text-left'" to="/"><i v-show="width<=576" class="fas fa-chevron-left"></i> Go Back</router-link>
      </div>
      <div :class="width>= 576 ? 'text-left' : 'text-right'" class="col-6">
        <router-link :class="width >= 576 ? 'btn btn-primary ml-3' : 'module__footerText module__footerText--right text-right'" to="/module">Continue <i v-show="width<=576" class="fas fa-chevron-right"></i></router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: 'moduleFooter',
  data () {
    return {
      width: window.innerWidth
    }
  },
  mounted () {
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
}
</script>
