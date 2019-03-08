<template>
<div>
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main">
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
        console.log('yea')
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
