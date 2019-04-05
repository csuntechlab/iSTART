<template>
  <div class="error">
    <div class="error-code">
      <h1 class="transition-350ms">404</h1>
    </div>
    <div class="error-message">
      <h2 class="transition-350ms">You have landed in unkown territory.</h2>
    </div>
    <div>
      <router-link class="error-return pointer" to="/">
        <button class="transition-350ms" @click="historyBack">
          <h3>Click here to return home!</h3>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Error',
  mixins: [changeRouteTitle],

  methods: {
    historyBack () {
      this.$router.back()
    }
  }
}
</script>
