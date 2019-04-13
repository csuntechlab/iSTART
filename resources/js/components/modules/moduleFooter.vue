<template>
<div class="module__footer">
<!-- <div class="module__footer"> -->
  <div class="row">
      <div class="col-6 text-right">
        <router-link class="module__footerText" to="/"><i class="fas fa-chevron-left"></i> Go Back</router-link>
      </div>
      <div class="col-6 text-left">
        <router-link class="module__footerText" to="/module">Continue <i class="fas fa-chevron-right"></i></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'moduleFooter'
}
</script>
