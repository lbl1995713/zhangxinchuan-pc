
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
/* muse-ui */
import MuseUI from 'muse-ui'

/* element-ui */
import ElementUI from 'element-ui'

import axiosConfig from './axios_conf'
import vuexConfig from './vuex_conf'

/* 引入全局插件 */
import Toast from './plugins/Toast/Toast'
import Progress from './plugins/Progress/Progress'

/* 引入muse所需css */
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题

/* 引入element-ui所需css */
import 'element-ui/lib/theme-chalk/index.css'

import './css/index.css'


Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Toast)
Vue.use(Progress)
Object.defineProperty(Vue.prototype, '$axios', { value:axiosConfig})

Vue.component('muse-ui-input', ()=>import('@/components/Muse-ui-components/Muse-ui-input'))
Vue.component('muse-ui-form', ()=>import('@/components/Muse-ui-components/Muse-ui-form'))
Vue.component('muse-ui-navPlatForm', ()=>import('@/components/Muse-ui-components/Muse-ui-navPlatForm'))
Vue.component('muse-ui-table', ()=>import('@/components/Muse-ui-components/Muse-ui-table'))
Vue.component('muse-ui-paginator', ()=>import('@/components/Muse-ui-components/Muse-ui-paginator'))

Vue.component('element-ui-input', ()=>import('@/components/Element-ui-components/Element-ui-input'))
Vue.component('element-ui-form', ()=>import('@/components/Element-ui-components/Element-ui-form'))
Vue.component('element-ui-table', ()=>import('@/components/Element-ui-components/Element-ui-table'))
Vue.component('element-ui-paginator', ()=>import('@/components/Element-ui-components/Element-ui-paginator'))
Vue.component('element-ui-navMenu', ()=>import('@/components/Element-ui-components/Element-ui-navMenu'))


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(vuexConfig),//用于vuex
  template: '<App/>',
  components: { App }
})
