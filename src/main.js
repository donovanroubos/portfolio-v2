import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Default styling
import './scss/app.scss'

// Import global allData
import globalData from './globalData'

Vue.config.productionTip = false

globalData.install = function() {
  Object.defineProperty(Vue.prototype, '$globalData', {
    get() { return globalData }
  })
}

Vue.use(globalData)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
