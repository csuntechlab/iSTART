<template>
  <div class="schedule">
    <div class="schedule-container container-fluid transition-350ms">
      <div class="schedule-description">
        <h1 class="schedule-description__header">Schedule</h1>
        <p class="schedule-description__info">New modules, surveys, and quizzes will be available weekly.</p>
      </div>

      <div class="schedule-labels row">
        <div class="col-5 col-l-6">
          <span>Upcoming</span>
        </div>
        <div class="schedule-labels__available col-7 col-l-6">
          <span>Date Available</span>
        </div>
      </div>
      <hr class="schedule-divider">

      <ScheduleModules></ScheduleModules>
    </div>
  </div>
</template>

<script>
import ScheduleModules from './../components/schedule/schedule-modules'

export default {
  name: 'schedule',
  components: {
    ScheduleModules
  }
}
</script>
