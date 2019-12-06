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
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

import Navbar from './../components/global/Navbar'
import ControlGroup from './../components/dashboard/ControlGroup'
import DashboardModule from './../components/dashboard/DashboardModule'
import DashboardNotification from './../components/dashboard/DashboardNotification'

export default {
  name: 'Dashboard',
  mixins: [changeRouteTitle],
  components: {
    Navbar,
    ControlGroup,
    DashboardModule,
    DashboardNotification
  },

  computed: {
    ...mapGetters([
      'user',
      'isDevelopmentMode'
    ])
  }
}
</script>
