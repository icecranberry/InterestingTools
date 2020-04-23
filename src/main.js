import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.roductionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
