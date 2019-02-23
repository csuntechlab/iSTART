<template>
    <div class="container">
        <h1 class="text-center login-title">iSTART</h1>
        <login-card></login-card>
        </div>

</template>

<script>
import loginCard from '../components/login/login-card.vue'
export default {
  name: 'login',
  data () {
    return {
    }
  },

  components: {
    loginCard
  }

}
</script>
