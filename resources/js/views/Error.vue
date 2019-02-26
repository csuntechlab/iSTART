<template>
  <div class="error">
    <div class="error-code">
      <h1 class="transition-350ms">404</h1>
    </div>
    <div class="error-message">
      <h2 class="transition-350ms">You have landed in unkown territory.</h2>
    </div>
    <router-link class="error-return pointer" tag="div" to="/">
      <button class="transition-350ms"><h3>Click here to return home!</h3></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>
