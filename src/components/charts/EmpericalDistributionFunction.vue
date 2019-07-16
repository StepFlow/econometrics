<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: ['x', 'y'],
    mounted() {
      this.renderChart({
        labels: this.x,
        datasets: [{
          label: 'Эмпирическая функция распределения',
          data: this.y,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          fill: false,
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        title: {
          display: true,
          text: 'Приближенный график эмпирической функции распределения'
        },
        tooltips: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Границы интервалов'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Значение'
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 1,
            }
          }]
        }
      })
    }
  }
</script>

<style>

</style>
