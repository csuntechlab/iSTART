<template>
  <div>
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './globals/navbar.vue'
export default {
  components: {
    navbar
  }
}
</script>
