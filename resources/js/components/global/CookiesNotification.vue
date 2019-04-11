<template>
  <div class="cookies-notification container-fluid" v-if="showCookiesPolicy">
    <div class="cookies-notification-wrap row">
      <div class="col-12 col-sm-9">
        <h1 class="cookies-notification__header">We NEED Cookies!</h1>
        <p class="cookies-notification__description">iSTART uses cookies for a personalized and responsive experience. Please enable cookies and accept our conditions to use our app!</p>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center col-12 col-sm-3">
        <button v-if="this.checkForCookiesEnabled()" class="cookies-notification__button-accept btn btn-primary btn-lg" @click="confirmCookiesPolicy">Accept</button>
        <em v-else>Enable Cookies!</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCookiesPolicy: true
    }
  },

  mounted () {
    let isCookiesPolicyAccepted = window.localStorage.isCookiesPolicyAccepted
    if (isCookiesPolicyAccepted && this.checkForCookiesEnabled()) {
      this.showCookiesPolicy = false
    } else {
      this.showCookiesPolicy = true
    }
  },

  methods: {
    checkForCookiesEnabled () {
      if (document.cookie.length > 1) {
        return true
      } else {
        return false
      }
    },

    confirmCookiesPolicy () {
      if (this.checkForCookiesEnabled()) {
        window.localStorage.isCookiesPolicyAccepted = true
        this.showCookiesPolicy = false
      } else {
        window.localStorage.isCookiesPolicyAccepted = false
      }
    }
  }
}
</script>
