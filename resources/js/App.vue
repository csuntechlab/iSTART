<template>
<div>
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
          this.$router.push({ name: 'welcome' })
        }
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    getEnvTimeout() {
      console.log(document.querySelector('meta[name=time-limit]').content)
    }
  },
  mounted () {
    this.checkForCookies(),
    this.getEnvTimeout()
  }
}
</script>
