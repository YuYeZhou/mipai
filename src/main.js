// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../src/assets/styles/reset.css'
import store from './store/index.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
// Vue.use(ElementUI)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
