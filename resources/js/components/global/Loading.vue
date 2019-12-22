<template>
    <div class="loading-container">
        <div class="loading__logo-container">
            <span class="loading__dot"></span>
            <img class="loading__logo" :src="url + '/images/logos/logo_load.png'" alt="iStart Loading"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      url: window.appURL
    }
  }
}

</script>
