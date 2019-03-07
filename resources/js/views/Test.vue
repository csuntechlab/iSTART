<template>
  <div class="test">
    <DashboardNotification></DashboardNotification>
  </div>
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import DashboardNotification from './../components/DashboardNotification'

export default {
  name: 'home',
  mixins: [changeRouteTitle],
  components: {
    DashboardNotification
  }
}
</script>
