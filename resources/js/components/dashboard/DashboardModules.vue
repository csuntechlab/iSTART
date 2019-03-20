<template>
  <div class="dashboard-modules">
    <DashboardNotification></DashboardNotification>
    <div class="mt-5">
      <div class="row text-center m-0" v-for="(item, index) in headings" :key="index">
        <p class="w-100">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNotification from './DashboardNotification'

export default {
  name: 'DashboardModules',
  data () {
    return {
      headings: [
        'module 1: alcohol',
        'module 2: marijuana',
        'module 3: Tobacco',
        'module 4: Prescription'
      ]
    }
  },

  components: {
    DashboardNotification
  }
}
</script>
