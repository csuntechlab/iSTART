<template>
    <div class="dashboard-module-wrap mt-5">
      <div class="dashboard-module text-center col-12" v-for="(item, index) in modules" :key="index">
        <router-link to="/">
          <div class="dashboard-module__overview row">
            <div class="dashboard-module__thumbnail">
              <img class="dashboard-module__thumbnail-image" v-bind:src="item.image">
            </div>
            <div class="dashboard-module__header">
              {{item.name}}
            </div>
          </div>
          <div class="row   dashboard-module__body align-items-center">
            <div class="col-2 text-left">
              <div class="dashboard-module__progress">
                <p class="dashboard-module__progress-text"
                :class="item.completion.progress.toString().length <= 2 ?
                'dashboard-module__progress-text--sm' :
                'dashboard-module__progress-text--lg'">{{ item.completion.progress }}%
                </p>
                <loading-progress class="dashboard-module__loader"
                  :progress="item.completion.progress/100"
                  :size="size"
                  :shape="shape.circle"
                />
              </div>
            </div>
            <div class="col-5 text-left">
              <span class="dashboard-module__date ml-3">{{ item.completion.date}}</span>
            </div>
            <div class="col-4 text-right">
              <span class="dashboard-module__status">{{item.completion.status}}</span>
              <i v-bind:class="[ item.completion.completed ? 'dashboard-module__status-circle fas fa-check-circle' : 'fas fa-chevron-right' ]"></i>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import { changeRouteTitle } from './../../mixins/changeRouteTitle.js'

export default {
  name: 'DashboardModule',
  mixins: [changeRouteTitle],

  data () {
    return {
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      },
      modules: {
        alcohol: {
          name: 'Alcohol',
          image: '/images/thumbnail/alcohol_thumbnail.jpg',
          completion: {
            progress: 2,
            completed: false,
            status: this.checkCompletionStatus(2),
            date: '4 days left to complete'
          },
          description: 'Alcohol, I feel fuzzy'
        },

        marijuana: {
          name: 'Marijuana',
          image: '/images/thumbnail/test.jpg',
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
          image: '/images/thumbnail/test.jpg',
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
