<template>
  <div v-if="getNextModuleDate && (user.user_group === 'intervention')" class="dashboard-notification col-12">
    <div class="row">
      <div class="dashboard-notification__message-container col-12">
        <p class="dashboard-notification__message">Up Next</p>
        <p class="dashboard-notification__message-date">Next module will be available on: <b>{{ getNextModuleDate }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardNotification',

  computed: {
    ...mapGetters(
      [
        'user',
        'getNextModuleDate'
      ]
    )
  }
}
</script>
