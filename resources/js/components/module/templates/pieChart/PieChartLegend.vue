<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: ['response', 'chartId', 'sources'],
  data () {
    return {
      chartdata: {
        userData: {
          labels: ['Your Guess: ' + this.response + '%'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#B999FF', '#DEDEDE'],
              data: [this.response, 100 - this.response]
            }
          ]
        },
        sourcesData: {
          labels: ['Actual Percentage: ' + this.sources + '%'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#5CBBE4', '#DEDEDE'],
              data: [this.sources, 100 - this.sources]
            }
          ]
        }
      },
      options1: {
        tooltips: {
          enabled: true,
          custom: function (tooltipItem) {
            if (tooltipItem.dataPoints) {
              if (tooltipItem.dataPoints[0].index !== 0) {
                tooltipItem.backgroundColor = 'rgba(0, 0, 0, 0)'
              }
            }
          },
          callbacks: {
            label: function (tooltipItem, data) {
              if (tooltipItem.index === 0) {
                return data.labels[0]
              } else {
                return false
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false,
          text: this.question
        },
        legend: {
          fullWidth: true,
          labels: {
            boxWidth: 10,
            fontFamily: "'Roboto', 'Arial', sans-serif"
          }
        }
      },
      options2: {
        tooltips: {
          enabled: true,
          custom: function (tooltipItem) {
            if (tooltipItem.dataPoints) {
              if (tooltipItem.dataPoints[0].index !== 0) {
                tooltipItem.backgroundColor = 'rgba(0, 0, 0, 0)'
              }
            }
          },
          callbacks: {
            label: function (tooltipItem, data) {
              if (tooltipItem.index === 0) {
                return data.labels[0]
              } else {
                return false
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false,
          text: this.question
        },
        legend: {
          fullWidth: false,
          labels: {
            boxWidth: 10,
            fontFamily: "'Roboto', 'Arial', sans-serif"
          }
        }
      }
    }
  },
  mounted () {
    if (this.chartId === 'one') {
      this.renderChart(this.chartdata.userData, this.options1)
    }
    if (this.chartId === 'two') {
      let getWindowWidth = window.innerWidth
      if (getWindowWidth <= 350) {
        let orignalString = this.chartdata.sourcesData.labels[0]
        let shortenString = orignalString.replace('Percentage:', 'Pct.:')
        this.chartdata.sourcesData.labels[0] = shortenString
        this.renderChart(this.chartdata.sourcesData, this.options2)
      } else {
        this.renderChart(this.chartdata.sourcesData, this.options2)
      }
    }
  }
}
</script>
