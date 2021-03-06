// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/reset.css'

Vue.config.productionTip = false

require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0]
})
