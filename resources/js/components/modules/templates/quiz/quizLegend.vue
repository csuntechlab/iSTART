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
        datacollection1: {
          labels: ['Your Response'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: [
                '#3861D1',
                '00FF00'
              ],
              data: [this.response, 100 - this.response]
            }
          ]
        },
        datacollection2: {
          labels: ['Sources'],
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
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: this.question
        }
      },
      options2: {
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
      this.renderChart(this.chartdata.datacollection1, this.options1)
    }
    if (this.chartId === 'two') {
      this.renderChart(this.chartdata.datacollection2, this.options2)
    }
  }
}
</script>
