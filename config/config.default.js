const fs = require('fs')
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
  },

  recommendGoodsID: [
    '493100033',
    '491208678',
    '490429437',
    '489149132',
    '490424878',
    '490246165',
    '490837079',
    '490836472',
    '490541119',
    '492704570',
    '492528552',
    '492533820'
  ],

  siteFile: {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/common/asset/favicon.ico'))
  }
})
