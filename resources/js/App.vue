<template>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loadingCheck: false
    }
  },
  methods: {
    checkForCookies () {
      if (document.cookie.indexOf('userKey') !== -1) {
        this.$router.push({ name: 'welcome' })
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
