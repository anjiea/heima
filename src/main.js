import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入elementui
import ElementUI from 'element-ui'
// 注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
