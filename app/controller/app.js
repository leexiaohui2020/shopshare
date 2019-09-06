const Controller = require('egg').Controller

class AppController extends Controller {

  // 首页
  async index() {
    const { ctx } = this
    ctx.redirect('/shop42284557')
  }

  // 简个东西 - 有赞商城
  async shop42284557() {
    const { ctx } = this
    const { url } = ctx
    await ctx.render('shop42284557.js', { ctx, url })
  }
}

module.exports = AppController
