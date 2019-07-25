import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // login后边不设置index.vue也可以
    // 当前项目已经把index.vue  index.js 设置为默认索引文件了，它们会自动被寻找到

    { path: '/', component: () => import('@/views/login') },
    { path: '/music', name: 'music', component: () => import('@/views/music') },
    { path: '/login', name: 'login', component: () => import('@/views/login') },
    { path: '/home', name: 'home', component: () => import('@/views/home') }

  ]
})
