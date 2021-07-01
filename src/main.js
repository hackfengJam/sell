// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

let router = new VueRouter({
  routes
})

// let app = Vue.extend(App)
new Vue({
  router,
  render: h => h(App)
  // render: x => x(App)
  // 这里的render: x => x(App)是es6的写法
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(x){
  //  return x(App);
  // });
}).$mount('#app')
