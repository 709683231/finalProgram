import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router
})
