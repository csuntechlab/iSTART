<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Logout',
  mixins: [changeRouteTitle],
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
