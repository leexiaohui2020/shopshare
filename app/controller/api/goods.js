const Controller = require('egg').Controller

class GoodsApiController extends Controller {

  async getRecommend() {
    const { ctx } = this
    ctx.body = await ctx.service.goods.getRecommend()
  }
}

module.exports = GoodsApiController
