<template>
  <div class="cookies-notification container-fluid" v-if="showCookiesPolicy">
    <div class="cookies-notification-wrap row">
      <div class="col-12 col-sm-9">
        <h1 class="cookies-notification__header">We NEED Cookies!</h1>
        <p class="cookies-notification__description">iSTART uses cookies for a personalized and responsive experience. Please enable cookies and accept our conditions to use our app!</p>
        <span class="pointer focus cookies-notification__button" @click="isPrivacyPolicyOpen = !isPrivacyPolicyOpen">Privacy Policy</span>
      </div>

      <section v-if="isPrivacyPolicyOpen" class="cookies-notification__policy">
        <h1>Privacy Policy</h1>
        <p>iStart uses your data to provide you a personalized experience and must be accepted in order to use the app. Your data is collected and used in the following ways...</p>
        <ul>
          <li>Account authorization</li>
          <li>Capturing module progression</li>
        </ul>
      </section>

      <div class="d-flex flex-column justify-content-center align-items-center col-12 col-sm-3">
        <button v-if="this.checkForCookiesEnabled()" class="cookies-notification__button-accept btn button-primary btn-lg" @click="confirmCookiesPolicy">Accept</button>
        <em v-else>Enable Cookies!</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCookiesPolicy: true,
      isPrivacyPolicyOpen: false
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
