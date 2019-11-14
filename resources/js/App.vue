<template>
  <div id="app">
    <router-view />
    <CookiesNotification></CookiesNotification>
  </div>
</template>

<script>
import CookiesNotification from './components/global/CookiesNotification'
import { mapActions, mapState } from 'vuex'
import { idleTimeout } from './mixins/idleTimeout'

export default {
  mixins: [
    idleTimeout
  ],

  components: {
    CookiesNotification
  },

  computed: {
    ...mapState({
      userObject: state => state.User.user
    })
  },

  mounted () {
    this.checkForCookies()
    this.setIdleTimer()
    this.userExists()
  },

  updated () {
    this.resetIdleTimer()
  },

  methods: {
    ...mapActions([
      'clearUserData'
    ]),

    userExists () {
      if (Object.keys(this.userObject).length === 0) {
        this.clearUserData()
      }
    },

    checkForCookies () {
      if (document.cookie.includes('userKey')) {
        if (this.$route.fullPath === '/login') {
          this.$router.push({ name: 'Dashboard' })
        }
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>
