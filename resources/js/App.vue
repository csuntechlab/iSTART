<template>
  <div class="app">
    <navbar v-show="$route.path != '/login'" ></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from './globals/navbar.vue'
export default {
  components: {
    navbar
  },

  methods: {
    checkForCookies () {
      if (document.cookie.includes('userKey')) {
        this.$router.push({ name: 'dashboard' })
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  },

  mounted () {
    this.checkForCookies()
  }
}
</script>
