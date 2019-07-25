import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

// 引入element-ui
import ElementUI from 'element-ui'

import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$http = axios

// 注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
