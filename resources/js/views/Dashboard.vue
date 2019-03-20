<template>
  <div class="dashboard container-fluid">
    <DashboardNotification v-if="this.user.user_group !=='control'"></DashboardNotification>
    <ControlGroup v-if="this.user.user_group === 'control'"></ControlGroup>
    <ComparisonGroup v-if="this.user.user_group === 'comparison'"></ComparisonGroup>
    <InterventionGroup v-if="this.user.user_group === 'intervention'"></InterventionGroup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ControlGroup from './../components/dashboard/ControlGroup'
import ComparisonGroup from './../components/dashboard/ComparisonGroup'
import InterventionGroup from './../components/dashboard/InterventionGroup'
import DashboardNotification from './../components/dashboard/DashboardNotification'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  components: {
    ControlGroup,
    ComparisonGroup,
    InterventionGroup,
    DashboardNotification
  }
}
</script>
