<template>
  <router-link to="/">
    <div class="dashboard-modules">
      <div class="mt-5">
        <div class="dashboard-modules-container text-center col-12" v-for="(item, index) in modules" :key="index">
          <div class="dashboard-modules__overview row">
            <div class="dashboard-modules__thumbnail">
              <img class="dashboard-modules__thumbnail-image" src="./../../../../public/images/thumbnail/test.jpg">
            </div>
            <div class="dashboard-modules__header">
              {{item.name}}
            </div>
          </div>
          <div class="dashboard-modules__progress row align-items-center">
            <div class="col-5 text-left">
              <span>{{item.completion.date}}</span>
            </div>
            <div class="col-7 text-right">
              <span class="dashboard-modules__status">{{item.completion.status}}</span>
              <i v-bind:class="[ item.completion.completed ? 'dashboard-modules__status-circle fas fa-check-circle' : 'fas fa-chevron-right' ]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { changeRouteTitle } from './../../mixins/changeRouteTitle.js'

export default {
  name: 'DashboardModules',
  mixins: [changeRouteTitle],

  data () {
    return {
      modules: {
        alcohol: {
          name: 'Alcohol',
          completion: {
            progress: 0,
            completed: false,
            status: this.checkCompletionStatus(0),
            date: 'Available until: 00/00/00'
          },
          description: 'Alcohol, I feel fuzzy'
        },

        marijuana: {
          name: 'Marijuana',
          completion: {
            progress: 50,
            completed: false,
            status: this.checkCompletionStatus(50),
            date: 'Available until: 00/00/00'
          },
          description: 'Marijuana; ...'
        },

        tobacco: {
          name: 'Tobacco',
          completion: {
            progress: 100,
            completed: true,
            status: this.checkCompletionStatus(100),
            date: 'Completed on: 00/00/00'
          },
          description: 'Tobacco; I feel relaxed'
        }
      }
    }
  },

  methods: {
    checkCompletionStatus (progressPercentAsNumber) {
      if (progressPercentAsNumber < 1) {
        return 'Start'
      } else if (progressPercentAsNumber > 99) {
        return 'Completed'
      } else {
        return 'Continue'
      }
    }
  }
}
</script>
