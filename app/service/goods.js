const Service = require('egg').Service
const headers = {
  Cookie: 'KDTSESSIONID=YZ589861046815137792YZNchitDOh; yz_log_ftime=1560675432842; yz_log_uuid=c7fc394e-f74e-8b8d-7281-5dd262eee536; gr_user_id=04c052c1-fb91-4c8b-a3ad-a4c125e947de; grwng_uid=3150fcb3-52e6-435c-9f59-6ab1949d9cec; nobody_sign=YZ589861046815137792YZNchitDOh; yz_ep_page_type_track=iDJ3GNJDHbhHtOl6W3j3ZA%3D%3D; _kdt_id_=42092389'
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

  /** 获取短链接 */
  async getShortLink(opts = {}) {
    const { ctx } = this
    const { redirectUrl } = opts
    const url = 'https://shop42284557.youzan.com/wscshop/ump/salesman/share.json'
    const { data } = await ctx.curl(url, {
      data: {
        kdt_id: '42092389',
        redirectUrl: encodeURIComponent(redirectUrl)
      },
      headers
    })
    return data
  }

  /** 根据分类获取商品 */
  async getCase(opts = {}) {
    const { ctx } = this
    const { tagId, page, pageSize } = opts
    const url = 'https://shop42284557.youzan.com/wscshop/showcase/goodsList.json'
    const { data } = await ctx.curl(url, {
      data: { tagId, page, pageSize, goodsFrom: 1 },
      headers,
    })
    return data
  }

  /** 根据关键词获取商品 */
  async getGoodsByKeywords(opts = {}) {
    const { ctx } = this
    const { keyword, page, page_size, order, order_by } = opts
    const requestData = { keyword, page, page_size, order, order_by }
    for (const k in requestData) {
      if (!requestData[k]) {
        delete requestData[k]
      }
    }
    const url = 'https://shop42284557.youzan.com/wscshop/showcase/goods_search/goods.json'
    const { data } = await ctx.curl(url, {
      data: requestData,
      headers
    })
    return data
  }
}

module.exports = GoodsService
