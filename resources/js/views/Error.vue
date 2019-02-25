<template>
  <div class="error">
    <div class="error-code">
      <h1 class="transition-350ms">404</h1>
    </div>
    <div class="error-message">
      <h2 class="transition-350ms">You have landed in unkown territory.</h2>
    </div>
    <div class="error-return pointer" @click="returnHome">
      <h3 class="transition-350ms">Click here to return home!</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',

  methods: {
    returnHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
