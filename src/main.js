import Vue from 'vue'
import App from './App.vue'
import demo from './components/index.js'
Vue.use( demo )
new Vue({
  el: '#app',
  render: h => h(App)
})
