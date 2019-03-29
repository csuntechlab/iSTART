<template>
  <div class="schedule">
    <div class="container transition-350ms">
      <div class="page-description">
        <h1 class="page-description__header">Schedule</h1>
        <p class="page-description__info">New modules, surveys, and quizzes will be available weekly.</p>
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
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Schedule',
  mixins: [changeRouteTitle],
  components: {
    ScheduleModules
  }
}
</script>
