import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'
import Position from './Position.vue'
import MudarTexto from './MudarTexto.vue'
import Alertar from './Alertar.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)
Vue.component('app-mudar-texto', MudarTexto)
Vue.component('app-position', Position)
Vue.component('app-alertar', Alertar)

new Vue({
  render: h => h(App),
}).$mount('#app')
