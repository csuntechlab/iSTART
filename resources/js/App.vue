<template>
  <div class="app">
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './components/global/navbar'
export default {
  components: {
    navbar
  },

  methods: {
    checkForCookies () {
      if (document.cookie.includes('userKey')) {
        if (this.$route.fullPath === '/login') {
          this.$router.push({ name: 'Dashboard' })
        }
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  },

  mounted () {
    this.checkForCookies()
  }
}
</script>
