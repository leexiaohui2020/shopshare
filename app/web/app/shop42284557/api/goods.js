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

export class Goods {
  constructor(opts = {}) {
    this.id = opts.id
    this.title = opts.title
    this.alias = opts.alias
    this.price = Number(opts.price)
    this.image = `${opts.image_url}!middle.jpg`
    this.subTitle = opts.sub_title
  }
}
