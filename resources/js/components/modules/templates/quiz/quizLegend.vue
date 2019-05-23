<template>
  <div>
    <p>{{ question }}</p>
    <canvas height="250" width="250" ref="canvas"></canvas>
  </div>
</template>
<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'quizLegend',
  extends: Pie,
  props: [
    'response',
    'question'
  ],
  data () {
    return {
      chartdata: {
        datacollection: {
          labels: ['Your Response', 'Sources'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: [
                '#FF0000',
                '#F0F0F0'
              ],
              data: [30, this.response]
            }
          ]
        }
      },
      options: {
        responsive: false,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata.datacollection, this.options)
  }
}
</script>
