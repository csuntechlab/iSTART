<template>
  <div class="dashboard container">
    <navbar :displayCurrentPage="$route.name"/>
    <div class="dashboard-content container">
      <dashboard-module/>
    </div>
  </div>
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import { mapActions } from 'vuex'

import Navbar from './../components/global/Navbar'
import DashboardModule from './../components/dashboard/DashboardModule'

export default {
  mixins: [changeRouteTitle],
  components: {
    Navbar,
    DashboardModule
  },

  mounted () {
    this.setDemoMode()
  },

  methods: {
    ...mapActions(
      [
        'setDemoMode'
      ]
    )
  }
}
</script>
