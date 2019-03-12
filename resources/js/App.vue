<template>
  <div class="app">
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main-wrapper">
      <router-view />
    </div>
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
        if (this.$route.fullPath === '/login') {
          this.$router.push({ name: 'dashboard' })
        }
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
