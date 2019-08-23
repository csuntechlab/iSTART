<template>
  <div class="dashboard container">
    <Navbar/>
    <DashboardNotification v-if="user.user_group !=='control'"></DashboardNotification>
    <ControlGroup v-if="user.user_group === 'control'"></ControlGroup>
    <ComparisonGroup v-if="isDevelopment"></ComparisonGroup>
    <ComparisonGroup v-if="user.user_group === 'comparison'"></ComparisonGroup>
    <InterventionGroup v-if="user.user_group === 'intervention'"></InterventionGroup>
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

  data () {
    return {
      isDevelopment: false
    }
  },

  mounted () {
    if (process.env.NODE_ENV === 'development') {
      this.isDevelopment = true
    }
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
