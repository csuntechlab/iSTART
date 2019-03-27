<template>
  <div class="dashboard container-fluid">
    <DashboardNotification v-if="this.user.user_group !=='control'"></DashboardNotification>
    <ControlGroup v-if="this.user.user_group === 'control'"></ControlGroup>
    <ComparisonGroup v-if="this.user.user_group === 'comparison'"></ComparisonGroup>
    <InterventionGroup v-if="this.user.user_group === 'intervention'"></InterventionGroup>
    <loading-progress
      :progress="module_percentage"
      :size="size"
      :shape="shape.line"
    />
    <loading-progress
      :progress="module_percentage"
      :size="size"
      :shape="shape.circle"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
