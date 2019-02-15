<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      THE TIME TO END YOUR ADDICTION IS NOW!
    </p>
    <b-alert show>Testing BootStrap</b-alert>
    <h3>LOGIN</h3>
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
