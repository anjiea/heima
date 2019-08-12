import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

// 引入element-ui
import ElementUI from 'element-ui'

import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// axios请求拦截器
axios.interceptors.request.use(function (config) {
//
//
  var token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}, function (error) {
  return Promise.reject(error)
})
//
//
// axios响应拦截器
axios.interceptors.response.use(function (response) {
  // axios完整请求的后续逻辑处理
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

Vue.prototype.$http = axios

// 注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
