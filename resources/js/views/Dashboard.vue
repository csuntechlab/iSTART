<template>
  <div class="dashboard container-fluid">
    <div v-if="this.user.user_group === 'control'">
      <ControlGroup></ControlGroup>
    </div>
    <div v-if="this.user.user_group === 'comparison'">
      <DashboardNotification></DashboardNotification>
      <ComparisonGroup></ComparisonGroup>
    </div>
    <div v-if="this.user.user_group === 'intervention'">
      <DashboardNotification></DashboardNotification>
      <InterventionGroup></InterventionGroup>
    </div>
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
