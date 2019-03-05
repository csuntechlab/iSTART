<template>
    <div class="container login">
        <h1 class="login__title">iSTART</h1>
        <login-card></login-card>
        </div>

</template>

<script>
import loginCard from './../components/login/login-form.vue'
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
