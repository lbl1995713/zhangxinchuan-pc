
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
/* muse-ui */
import MuseUI from 'muse-ui'

import axiosConfig from './axios_conf'
import vuexConfig from './vuex_conf'

/* 引入全局插件 */
import Toast from './plugins/Toast/Toast'

/* 引入muse所需css */
import 'muse-ui/dist/muse-ui.css'
import './css/index.css'


Vue.use(MuseUI)
Vue.use(Vuex)
Vue.use(Toast)
Object.defineProperty(Vue.prototype, '$axios', { value:axiosConfig})
Vue.component('muse-ui-input', ()=>import('@/components/Muse-ui-input'))
Vue.component('muse-ui-form', ()=>import('@/components/Muse-ui-form'))
Vue.component('muse-ui-navPlatForm', ()=>import('@/components/Muse-ui-navPlatForm'))


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(vuexConfig),//用于vuex
  template: '<App/>',
  components: { App }
})
