<template>
  <div class="dashboard container-fluid">
    <div v-if="this.user.user_group === 'control'">
      <ControlGroup></ControlGroup>
    </div>
    <div v-if="this.user.user_group === 'comparison'">
      <ComparisonGroup></ComparisonGroup>
    </div>
    <div v-if="this.user.user_group === 'intervention'">
      <InterventionGroup></InterventionGroup>
    </div>
    <progress-loader :sizeString="64" :shapeString="shape.circle" :module_percentage="module_percentage"></progress-loader>
    <progress-loader :sizeString="64" :shapeString="shape.line" :module_percentage="module_percentage"></progress-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ControlGroup from './../components/dashboard/ControlGroup'
import ComparisonGroup from './../components/dashboard/ComparisonGroup'
import InterventionGroup from './../components/dashboard/InterventionGroup'
import progressLoader from './../components/progress/progressLoader'
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
    progressLoader
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
