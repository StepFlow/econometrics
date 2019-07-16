<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    props: ['x', 'y'],
    mounted() {
      this.renderChart({
        labels: this.x,
        datasets: [{
          label: 'Относительная частота',
          backgroundColor: window.chartColors.blue,
          borderColor: window.chartColors.blue,
          borderWidth: 1,
          data: this.y
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Гистограмма относительных частот'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Интервал'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Относительная частота интервала'
            }
          }]
        }
      })
    }
  }
</script>

<style>

</style>
