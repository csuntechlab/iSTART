<template>
  <div class="dashboard container">
    <navbar :displayCurrentPage="$route.name"/>
    <dashboard-notification v-if="this.user.user_group === 'intervention'"/>
    <control-group v-if="this.user.user_group === 'control'"/>
    <dashboard-module v-if="this.user.user_group === 'comparison' || this.user.user_group === 'intervention'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './../components/global/Navbar'
import ControlGroup from './../components/dashboard/ControlGroup'
import DashboardModule from './../components/dashboard/DashboardModule'
import DashboardNotification from './../components/dashboard/DashboardNotification'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Dashboard',
  mixins: [changeRouteTitle],
  computed: {
    ...mapGetters([
      'user',
      'isDevelopmentMode'
    ])
  },

  components: {
    Navbar,
    ControlGroup,
    DashboardModule,
    DashboardNotification
  }
}
</script>
