import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Privacy from './components/Privacy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
    }
  ]
})