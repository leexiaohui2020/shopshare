import Vue from 'vue'
import App from 'common/app'
import index from './main.vue'
import createStore from './store'
import createRouter from './router'
import 'web/component'
import 'common/style/base.less'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)

if (EASY_ENV_IS_BROWSER) {
  const FastClick = require('fastclick')
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  })
}

export default new App({
  index,
  createStore,
  createRouter
}).bootstrap()
