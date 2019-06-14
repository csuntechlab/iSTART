<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'quizLegend',
  extends: Pie,
  props: [
    'response',
    'chartId',
    'sources'
  ],
  data () {
    return {
      chartdata: {
        userData: {
          labels: ['You said: ' + this.response + '%'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: [
                '#3861D1',
                '#DEDEDE'
              ],
              data: [this.response, 100 - this.response]
            }
          ]
        },
        sourcesData: {
          labels: ['Survey Results: ' + this.sources + '%'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: [
                '#3376C6',
                '#DEDEDE',
                '#2E2A32',
                '#BCB287'
              ],
              data: [this.sources, 100 - this.sources]
            }
          ]
        }
      },
      options1: {
        tooltips: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem, data) {
              if (tooltipItem.index === 0) {
                return data.labels[0]
              } else {
                return 'Other'
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: this.question
        }
      },
      options2: {
        tooltips: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem, data) {
              if (tooltipItem.index === 0) {
                return data.labels[0]
              } else {
                return 'Other'
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: this.question
        }
      }
    }
  },
  mounted () {
    if (this.chartId === 'one') {
      this.renderChart(this.chartdata.userData, this.options1)
    }
    if (this.chartId === 'two') {
      this.renderChart(this.chartdata.sourcesData, this.options2)
    }
  }
}
</script>
