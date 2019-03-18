<template>
  <div class="schedule-modules container-fluid">
    <div v-for="(item, index) in schedule" :key="index" class="row">
      <div class="col-5 col-l-6">
        <span>{{ item.name }}</span>
      </div>
      <div class="schedule-modules__date col-7 col-l-6">
        <span>{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ScheduleModules',
  data () {
    return {
      schedule: {
        Alcohol: {
          name: 'Alcohol',
          date: 'April 1, 2019'
        },

        Marijuana: {
          name: 'Marijuana',
          date: 'May 2, 2019'
        },

        Tobacco: {
          name: 'Tobacco',
          date: 'June 14, 2019'
        },

        LSD: {
          name: 'LSD',
          date: 'April 1, 2019'
        }
      }
    }
  }
}
</script>
