import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VHeader from '@/components/VHeader'

import '@fortawesome/fontawesome-free/js/all.min'

Vue.config.productionTip = false

Vue.component('v-header', VHeader)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
