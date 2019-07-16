import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lab1 from './views/Lab1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lab1',
      name: 'lab1',
      component: Lab1
    }
  ]
})
