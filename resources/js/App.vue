<template>
    <div id="nav">
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
      if (document.cookie.includes('userKey')) {
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
