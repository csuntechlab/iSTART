<template>
  <div class="home">
    <HelloWorld msg="Welcome to iSTART"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'home',
  mixins: [changeRouteTitle],
  components: {
    HelloWorld
  },

  data () {
    return {
    }
  }
}
</script>
