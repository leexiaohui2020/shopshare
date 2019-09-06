const path = require('path')

module.exports = app => ({
  keys: `${app.name}_1566719008112_4418`,
  middleware: [],

  vuessr: {
    layout: path.join(app.baseDir, 'app/web/index.html'),
    renderOptions: {
      baseDir: path.join(app.baseDir, 'app/view')
    }
  },

  cluster: {
    listen: {
      port: 18080
    }
  },

  security: {
    csrf: false
  },

  static: {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  }
})
