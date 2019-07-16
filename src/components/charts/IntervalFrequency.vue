<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: ['x', 'y'],
    mounted() {
      this.renderChart({
        labels: this.x,
        datasets: [{
          label: 'Частота интервала',
          data: this.y,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          fill: false,
          lineTension: 0
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        title: {
          display: true,
          text: 'Полигон частот'
        },
        tooltips: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Середина интервала'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Частота интервала'
            },
            ticks: {
              suggestedMin: -10,
              suggestedMax: 50,
            }
          }]
        }
      })
    }
  }
</script>

<style>

</style>
