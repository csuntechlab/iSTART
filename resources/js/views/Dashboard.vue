<template>
  <div class="dashboard container-fluid">
    <div v-if="controlGroup">
      <ControlGroup></ControlGroup>
    </div>
    <div v-if="comparisonGroup">
      <ComparisonGroup></ComparisonGroup>
    </div>
    <div v-if="interventionGroup">
      <InterventionGroup></InterventionGroup>
    </div>
  </div>
</template>

<script>
import ControlGroup from './../components/dashboard/ControlGroup'
import ComparisonGroup from './../components/dashboard/ComparisonGroup'
import InterventionGroup from './../components/dashboard/InterventionGroup'

export default {
  name: 'Dashboard',
  components: {
    ControlGroup,
    ComparisonGroup,
    InterventionGroup
  },

  data () {
    // Waiting for route to be updated to implement state
    return {
      controlGroup: false,
      comparisonGroup: false,
      interventionGroup: true
    }
  }
}
</script>
