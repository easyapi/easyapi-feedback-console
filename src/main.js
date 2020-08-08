import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Cookies from 'js-cookie'
import 'babel-polyfill'
import axios from './api/fetch'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false



//font
import './assets/font/iconfont.css'
//css
import './assets/css/custom-global.css'
//styles
import './assets/styles/index.scss'
import 'font-awesome/scss/font-awesome.scss'


import ElementUI from 'element-ui';

import './assets/styles/element-variables.scss'

Vue.use(ElementUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
