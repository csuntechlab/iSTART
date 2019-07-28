<template>
    <div class="dashboard-module-wrap mt-5">
      <div class="dashboard-module text-center col-12" v-for="(item, index) in modules" :key="index">
        <div @click="populateModule(index)">
          <div class="row">
            <div class="dashboard-module__overview-wrapper col-12 col-md-6">
              <div class="dashboard-module__overview row">
                <div class="dashboard-module__thumbnail">
                  <img class="dashboard-module__thumbnail-image" v-bind:src="item.image" v-bind:alt="item.altText">
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

              <div class="dashboard-module__body row align-items-center">
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
                <div class="col-6 col-md-10 text-left">
                  <span class="dashboard-module__date ml-3">
                    {{ item.completion.date}}
                    <i v-if="item.completion.completed" class="dashboard-module__status-circle fas fa-check-circle"></i>
                  </span>
                </div>
                <div class="dashboard-module__status-wrapper col-4 col-md-12">
                  <span v-if="!item.completion.completed" class="dashboard-module__status">{{item.completion.status}}</span>
                  <i v-if="!item.completion.completed" class="dashboard-module__status-indicator fas fa-chevron-right"></i>
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
import moduleSelector from './../modules/data/moduleSelector'

export default {
  name: 'DashboardModule',
  mixins: [
    changeRouteTitle,
    moduleSelector
  ],

  computed: {
    ...mapGetters(
      [
        'getCurrentModule'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'setCurrentModule'
      ]
    ),

    populateModule (index) {
      this.setCurrentModule(this.modules[index].name)

      if (this.getCurrentModule !== null || this.getCurrentModule !== 'undefined') {
        this.$router.push({ name: 'Module' })
      }
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
