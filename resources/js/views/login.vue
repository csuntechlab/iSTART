<template>
    <div class="container login">
        <h1 class="login__title">iSTART</h1>
        <login-form></login-form>
        </div>

</template>

<script>
import loginForm from './../components/login/login-form.vue'
export default {
  name: 'login',
  data () {
    return {
    }
  },

  components: {
    loginForm
  }

}
</script>
