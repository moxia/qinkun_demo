import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入乾坤微前端配置
import './micro-app.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
