<template>
  <div class="error">
    <div class="error-code">
      <h1 class="transition-350ms">404</h1>
    </div>
    <div class="error-message">
      <h2 class="transition-350ms">You have landed in unkown territory.</h2>
    </div>
    <div>
      <router-link class="error-return pointer" to="previousRoute.path">
        <button class="transition-350ms" @click="historyBack">
          <h3>Click here to go back!</h3>
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
  data () {
    return {
      previousRoute: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.previousRoute = from
    })
  },
  methods: {
    historyBack () {
      this.$router.back()
    }
  }
}
</script>
