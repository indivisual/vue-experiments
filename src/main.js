import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'

import * as VueGoogleMaps from '../node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBSjLRcUaVKDk2jPpX8XtVs2sK5rI0s5s4',
    v: 3.26,
    libraries: 'places'
  }
})

import 'reset-css/reset.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
