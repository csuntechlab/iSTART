<template>
  <div class="cookies-notification container-fluid">
    <div class="cookies-notification-wrap row">
      <div class="col-12 col-sm-9">
        <h1 class="cookies-notification__header">We NEED Cookies!</h1>
        <p class="cookies-notification__description">iSTART uses cookies for a personalized and responsive experience. Please enable cookies and accept our conditions to use our app!</p>
      </div>

      <div class="d-flex flex-column justify-content-center col-12 col-sm-3">
        <button class="cookies-notification__button-accept btn btn-primary btn-lg" @click="confirmCookiesPolicy">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.checkForCookiesEnabled()
  },

  methods: {
    checkForCookiesEnabled () {
      console.log(document.cookie)
    },

    confirmCookiesPolicy () {
      console.log(true)
    }
  }
}
</script>
