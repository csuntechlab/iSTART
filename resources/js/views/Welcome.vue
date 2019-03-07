<template>
    <div class="container">
        <h1 class="text-center">Welcome to iSTART</h1>
        <router-link to="/test">
          <a>Test</a>
        </router-link>
        <button @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'clearUserData'
    ]),
    logout () {
      this.clearUserData()
    }

  },
  components: {

  }

}
</script>
