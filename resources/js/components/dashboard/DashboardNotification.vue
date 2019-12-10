<template>
  <div v-if="nextModuleDate && (user.user_group === 'intervention')" class="dashboard-notification col-12">
    <div class="row">
      <div class="dashboard-notification__message-container col-12">
        <p class="dashboard-notification__message">Up Next</p>
        <p class="dashboard-notification__message-date">Next module will be available on <b>{{ nextModuleDate }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DashboardNotification',

  computed: {
    ...mapState(
      [
        'nextModuleDate',
        'user'
      ]
    )
  }
}
</script>
