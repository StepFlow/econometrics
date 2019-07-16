import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMathJax from 'vue-mathjax'
import VHeader from '@/components/VHeader'

import '@fortawesome/fontawesome-free/js/all.min'

Vue.use(VueMathJax)

Vue.config.productionTip = false

Vue.component('v-header', VHeader)

window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(8, 105, 174)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

new Vue({
  router,
  render: h => h(App),
  mounted() {
    let mathjaxScript = document.createElement('script')
    mathjaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML')
    mathjaxScript.setAttribute('async', true)
    document.body.appendChild(mathjaxScript)

    mathjaxScript.onload = function () {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
    }
  }
}).$mount('#app')
