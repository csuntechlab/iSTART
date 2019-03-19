<template>
  <div class="dashboard-modules">
    <div class="mt-5">
      <div class="dashboard-modules__module text-center m-0 col-12" v-for="(item, index) in modules" :key="index">
        <div class="dashboard-modules__overview row">
          <div class="dashboard-modules__thumbnail">
            <img class="dashboard-modules__thumbnail-image" src="./../../../../public/images/thumbnail/test.jpg">
          </div>
          <div class="dashboard-modules__header">
            {{item.name}}
          </div>
        </div>
        <div class="dashboard-modules__progress row">
          <div class="col-6 dashboard-modules__percentage text-left">
            <span>Test</span>
            <span>{{item.percentCompletion}}</span>
          </div>
          <div class="col-6 dashboard-modeuls__completion text-right">
            <span>{{item.completion.status}}</span>:
            <span>{{item.completion.date}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
          percentCompletion: this.checkCompletion(12),
          completion: {
            status: 'Incomplete',
            date: '00/00/00'
          },
          description: 'Alcohol'
        }
      }
    }
  },

  methods: {
    checkCompletion (percentAsNumber) {
      if (percentAsNumber < 1 || percentAsNumber > 99) {
        return ''
      } else {
        return percentAsNumber.toString() + '%'
      }
    }
  }
}
</script>
