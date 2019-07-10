<template>
  <div class="dashboard container">
    <navbar></navbar>
    <DashboardNotification v-if="this.user.user_group !=='control'"></DashboardNotification>
    <ControlGroup v-if="this.user.user_group === 'control'"></ControlGroup>
    <!--
      Removed until infrastructure is set up
      <ComparisonGroup v-if="this.user.user_group === 'comparison'"></ComparisonGroup>
    -->
    <ComparisonGroup></ComparisonGroup>
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
      'user'
    ])
  },
  components: {
    Navbar,
    ControlGroup,
    ComparisonGroup,
    InterventionGroup,
    DashboardNotification
  },
  data () {
    return {
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      },
      module_percentage: 0.24
    }
  }
}
</script>
