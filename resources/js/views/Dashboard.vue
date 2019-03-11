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
import ControlGroup from './ControlGroup'
import ComparisonGroup from './ComparisonGroup'
import InterventionGroup from './InterventionGroup'

export default {
  name: 'dashboard',
  components: {
    ControlGroup,
    ComparisonGroup,
    InterventionGroup
  },

  data () {
    return {
      controlGroup: false,
      comparisonGroup: false,
      interventionGroup: true
    }
  }
}
</script>
