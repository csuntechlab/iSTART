<template>
  <div class="dashboard container-fluid">
    <div v-if="this.user.group === 'control'">
      <ControlGroup></ControlGroup>
    </div>
    <div v-if="this.user.group === 'comparison'">
      <ComparisonGroup></ComparisonGroup>
    </div>
    <div v-if="this.user.group === 'intervention'">
      <InterventionGroup></InterventionGroup>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ControlGroup from './../components/dashboard/ControlGroup'
import ComparisonGroup from './../components/dashboard/ComparisonGroup'
import InterventionGroup from './../components/dashboard/InterventionGroup'

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
    InterventionGroup
  }
}
</script>
