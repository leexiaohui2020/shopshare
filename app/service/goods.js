const Service = require('egg').Service
const headers = {
  Cookie: '_kdt_id_=42092389'
}

class GoodsService extends Service {

  /** 获取推荐商品 */
  async getRecommend() {
    const { ctx, config } = this
    const { recommendGoodsID = [] } = config
    const goodsIds = recommendGoodsID.join(',')
    const url = 'https://shop42284557.youzan.com/wscshop/showcase/goodsList.json'
    const { data } = await ctx.curl(url, {
      data: {
        goodsIds
      },
      headers
    })
    return data
  }
}

module.exports = GoodsService
