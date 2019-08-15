<template>
    <div class="dashboard-module-wrap mt-3">
      <div class="dashboard-module text-center col-12" v-for="(item, index) in getModuleData" :key="index">
        <div @click="setModuleIndex(index); populateModule(index)">
          <div class="row">
            <div class="dashboard-module__overview-wrapper col-12 col-md-6">
              <div class="dashboard-module__overview row">
                <div class="dashboard-module__thumbnail">
                  <img class="dashboard-module__thumbnail-image" v-bind:src="item.thumbnail.src" v-bind:alt="item.thumbnail.alt">
                </div>
              </div>
            </div>

            <div class="dashboard-module__info col-12 col-md-6">
              <div class="dashboard-module__header">
                {{item.name}}
              </div>
              <div class="dashboard-module__description">
                {{item.description}}
              </div>

              <div class="dashboard-module__body row no-gutters align-items-center">
                <div class="col-2">
                  <div class="dashboard-module__progress">
                    <p class="dashboard-module__progress-text">
                      {{ roundPercentage(item.progress.slide_percentage) }}%
                    </p>
                    <loading-progress
                      class="dashboard-module__loader"
                      :progress="item.progress.slide_percentage/100"
                      :size="size"
                      :shape="shape.circle"
                    />
                  </div>
                </div>

                <div class="col-6 col-md-10">
                  <p class="dashboard-module__date">
                    Due: {{ item.progress.completion_date }}
                    <i v-if="item.progress.is_complete" class="fas fa-check-circle text-success"></i>
                    <i v-if="item.progress.is_incomplete" class="fas fa-times-circle text-danger"></i>
                  </p>
                </div>
                <div class="dashboard-module__status-wrapper col-4 col-md-12">
                  <button v-if="!item.progress.is_complete && !item.progress.is_incomplete" class="dashboard-module__status">Start</button>
                  <button v-if="item.progress.is_complete || item.progress.is_incomplete" class="dashboard-module__status">Review</button>
                  <i v-if="!item.progress.is_complete && !item.progress.is_incomplete" class="dashboard-module__status-indicator fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { changeRouteTitle } from './../../mixins/changeRouteTitle.js'
import moduleData from './../modules/data/moduleData'

export default {
  name: 'DashboardModule',
  mixins: [
    changeRouteTitle,
    moduleData
  ],

  data () {
    return {
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      }
    }
  },

  computed: {
    ...mapGetters(
      [
        'getModuleData',
        'getCurrentModule'
      ]
    )
  },

  mounted () {
    this.popluateModuleData(moduleData)
  },

  methods: {
    ...mapActions(
      [
        'setCurrentModule',
        'setModuleIndex',
        'setModuleData'
      ]
    ),

    popluateModuleData (moduleData) {
      this.setModuleData(moduleData)
    },

    populateModule (index) {
      this.setCurrentModule(this.getModuleData[index].name)

      if (this.getCurrentModule !== null || this.getCurrentModule !== 'undefined') {
        this.$router.push({ name: 'Module' })
      }
    },

    // Converts percentage to whole number
    roundPercentage (percentage) {
      return Math.floor(parseInt(percentage))
    },

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
