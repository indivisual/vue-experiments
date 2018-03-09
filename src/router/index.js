import Vue from 'vue'
import Router from 'vue-router'
import HelloIndra from '@/components/HelloIndra'
import minsaitMap from '@/components/maps/minsait-map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloIndra',
      component: HelloIndra
    },
     {
      path: '/map',
      name: 'minsaitMap',
      component: minsaitMap
    }
  ]
})
