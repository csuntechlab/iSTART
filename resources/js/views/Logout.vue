<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',

  mounted () {
    this.clearUserData()
  },

  methods: {
    ...mapActions([
      'clearUserData'
    ])
  }
}
</script>
