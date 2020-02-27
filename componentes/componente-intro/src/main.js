import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'
import Position from './Position.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Contador)
Vue.component('app-position', Position)
new Vue({
  render: h => h(App),
}).$mount('#app')
