import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins


export default {
  extends: Doughnut,
  mixins: [Doughnut, reactiveProp],
  props: ['options'],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // this.renderChart(this.chartData, this.options)
    this.renderChart(this.chartData, this.options)
  }
}