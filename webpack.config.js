module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    shop42284557: 'app/web/app/shop42284557/main.js'
  },
  alias: {
    web: 'app/web',
    vue: 'vue/dist/vue.esm.js',
    common: 'app/web/common',
    shop42284557: 'app/web/app/shop42284557'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {},
  plugins: {},
  done() {

  }
}
