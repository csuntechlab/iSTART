
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
import { BAlert } from '../../../node_modules/bootstrap-vue/es/components/'
export default {
  name: 'HelloWorld',
  components: {
    'b-alert': BAlert
  },
  props: {
    msg: String
  }
}
</script>
