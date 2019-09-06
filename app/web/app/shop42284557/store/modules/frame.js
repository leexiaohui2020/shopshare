import { getShortLink } from 'shop42284557/api/goods'

export default {

  actions: {
    async openGoods(ctx, goods) {
      const goodsId = goods.id
      const redirectUrl = `http://shop42284557.youzan.com/v2/goods/${goods.alias}`
      const url = await getShortLink({ redirectUrl, goodsId })
      window.open(url, '_blank')
    }
  }
}
