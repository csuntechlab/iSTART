<template>
<div class="module__footer">
  <div class="row">
      <div class="col-6 text-left">
        <router-link :class="width >= 576 ? 'btn btn-primary' : 'module__footerText module__footerText--left'" to="/"><i class="fas fa-chevron-left"></i> Go Back</router-link>
      </div>
      <div class="col-6 text-right">
        <router-link :class="width >= 576 ? 'btn btn-primary' : 'module__footerText module__footerText--right'" to="/module">Continue <i class="fas fa-chevron-right"></i></router-link>
      </div>
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
