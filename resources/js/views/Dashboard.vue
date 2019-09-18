<template>
  <div class="dashboard container">
    <navbar :displayCurrentPage="$route.name"/>
    <DashboardNotification v-if="this.user.user_group !=='control'"></DashboardNotification>
    <ControlGroup v-if="this.user.user_group === 'control'"></ControlGroup>
    <!--
      USED TO TEST MODULES WITH NO BACKEND ON DEV
    -->
      <ComparisonGroup></ComparisonGroup>
    <!-- <ComparisonGroup v-if="this.user.user_group === 'comparison'"></ComparisonGroup> -->
    <InterventionGroup v-if="this.user.user_group === 'intervention'"></InterventionGroup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './../components/global/Navbar'
import ControlGroup from './../components/dashboard/ControlGroup'
import ComparisonGroup from './../components/dashboard/ComparisonGroup'
import InterventionGroup from './../components/dashboard/InterventionGroup'
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
    ComparisonGroup,
    InterventionGroup,
    DashboardNotification
  }
}
</script>
