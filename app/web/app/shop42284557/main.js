import App from 'common/app'
import index from './main.vue'
import createStore from './store'
import createRouter from './router'
import 'web/component'

export default new App({
  index,
  createStore,
  createRouter
}).bootstrap()
