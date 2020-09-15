// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';  // 导入element-ui
import 'element-ui/lib/theme-chalk/index.css'; // 导入element-ui 样式
Vue.use(ElementUI); // 安装了element-ui

// 注册过滤器
import filterObj from "./filters"
for (let k in filterObj){
  Vue.filter(k, filterObj[k])
}

if (process.env.NODE_ENV =='development'){  // 开发环境！
  // 给JS里面使用！
  Vue.prototype.$host = "http://localhost:3333"
}
if (process.env.NODE_ENV == 'production') { // 生成环境！
  Vue.prototype.$host = ""
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
