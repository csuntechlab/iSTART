<template>
  <div class="dashboard-notification container-fluid padding-container">
    <div class="row">
      <div class="dashboard-notification__message-container col-7">
        <span class="dashboard-notification__message">Next module will be available on</span>
        <span class="dashboard-notification__message-date">00/00/00</span>
      </div>
      <div class="dashboard-notification__schedule-button col-5 align-self-end">
        <span class="dashboard-notification__schedule-text">Schedule</span>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardNotification'
}
</script>
