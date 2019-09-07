export default function(Vue) {
  const search = Vue.observable({ show: false })
  search.open = () => search.show = true
  search.close = () => search.show = false
  Vue.prototype.$search = search
}
