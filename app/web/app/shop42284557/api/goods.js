import axios from 'axios'

export const ERR_OK = 0

export async function getRecommend() {
  const { data } = await axios.post('/api/goods/getRecommend')
  if (data.code !== ERR_OK) return []
  return data.data.list.map(item => new Goods(item))
}

export async function getShortLink(opts = {}) {
  const { data } = await axios.post('/api/goods/getShortLink', opts)
  if (data.code !== ERR_OK) return null
  return `${opts.redirectUrl}?sl=${data.data.seller}`
}

export async function getCase(opts = {}) {
  const { data } = await axios.post('/api/goods/getCase', opts)
  if (data.code !== ERR_OK) return null
  return data.data.list.map(item => new Goods(item))
}

export async function getGoodsByKeywords(opts = {}) {
  const { data } = await axios.post('/api/goods/getGoodsByKeywords', opts)
  if (data.code !== ERR_OK) return null
  return data.data.map(item => new Goods(item))
}

export class Goods {
  constructor(opts = {}) {
    this.id = opts.id
    this.title = opts.title
    this.alias = opts.alias
    this.price = Number(opts.price)
    this.image = `${opts.image_url}!middle.jpg`
    this.subTitle = opts.sub_title
    this.totalSoldNum = opts.total_sold_num
  }

  async open() {
    const goodsId = this.id
    const redirectUrl = `http://shop42284557.youzan.com/v2/goods/${this.alias}`
    const url = await getShortLink({ redirectUrl, goodsId })
    window.open(url, '_self')
  }
}
