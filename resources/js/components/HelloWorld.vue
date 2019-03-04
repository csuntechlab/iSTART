
<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      THE TIME TO END YOUR ADDICTION IS NOW!
    </p>
    <h3>LOGIN</h3>
        <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <router-link to="/about">About</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
