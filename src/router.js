import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    // login后边不设置index.vue也可以
    // 当前项目已经把index.vue  index.js 设置为默认索引文件了，它们会自动被寻找到
    { path: '/login', name: 'login', component: () => import('@/views/login') },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      redirect: '/welcome', // 重定向1
      children: [
        // { path: '/home', redirect: '/welcome' },  // 重定向2
        // 配置子路由
        { path: '/welcome', name: 'welcome', component: () => import('@/views/welcome') },
        { path: '/article', name: 'article', component: () => import('@/views/article') },
        { path: '/account', name: 'account', component: () => import('@/views/account') }
      ]
    }
  ]
})

// 简单使用前置路由守卫
router.beforeEach((to, from, next) => {
  // to: 要去哪的路由信息 对象，to.path可以获得要执行的路由锚点信息
  // from: 从哪来的路由信息 对象, from.path获得从哪来的路由锚点信息
  // next  继续的意思,是回调函数，没有特殊情况该方法都要执行
  //       next(false)  路由停止执行
  //       next('/home') 要执行具体的路由
  //       next()        当前的路由没有阻拦继续执行的意思
  // 用户如果处于“非登录”状态，是要禁止访问后台页面的，但是login要强制请求过去
  var token = window.sessionStorage.getItem('token')
  if (!token && to.path !== '/login') {
    // this.$router.push({ name: 'login' })  //不ok
    // router.push({ name: 'login' }) // ok
    return next('/login') // ok
  }
  next()
})

export default router
