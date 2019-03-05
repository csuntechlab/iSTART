<template>
    <div id="nav">
    <router-view/>
  </div>
</template>
<script>
export default {
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
