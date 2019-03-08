<template>
  <div class="test">
    <DashboardNotification></DashboardNotification>
    <div class="content mt-5">
      <div class="row justify-content-center" v-for="(item, index) in headings" :key="index">
        <p>{{item}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { changeRouteTitle } from './../../mixins/changeRouteTitle.js'
import DashboardNotification from './../../components/global/DashboardNotification'

export default {
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
  name: 'home',
  mixins: [changeRouteTitle],
  components: {
    DashboardNotification
  }
}
</script>
