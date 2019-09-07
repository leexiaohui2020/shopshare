module.exports = app => {
  const { router, controller } = app

  router.post('/api/goods/getRecommend', controller.api.goods.getRecommend)
  router.post('/api/goods/getShortLink', controller.api.goods.getShortLink)
  router.post('/api/goods/getCase', controller.api.goods.getCase)
  router.get('/', controller.app.index)
  router.get('/shop42284557(/.+)?', controller.app.shop42284557)
}
