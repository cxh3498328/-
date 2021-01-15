import Vue from 'vue'
import App from './App.vue'

// 引入外部插件
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'

// 自定义组件
import NavBar from './components/navbar/NavBar'

// 自定义插件
import Message from '@/components/message/index'
import config from './config/baseConfig.js'

// 引入外部样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入自定义全局css样式
import './assets/css/global.css'

Vue.config.productionTip = false
// 注册组件
Vue.use(ElementUI)
// 注册全局的自定义组件
Vue.component('NavBar', NavBar)
// 全局注册插件
Vue.prototype.$message = Message
Vue.prototype.$pConfig = config

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
