const Controller = require('egg').Controller

class GoodsApiController extends Controller {

  async getRecommend() {
    const { ctx } = this
    ctx.body = await ctx.service.goods.getRecommend()
  }

  async getShortLink() {
    const { ctx } = this
    ctx.body = await ctx.service.goods.getShortLink(ctx.request.body)
  }
}

module.exports = GoodsApiController
