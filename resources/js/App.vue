<template>
  <div>
    <navbar v-show="$route.path != '/login'" ></navbar>
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
