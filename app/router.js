module.exports = app => {
  const { router, controller } = app

  router.post('/api/goods/getRecommend', controller.api.goods.getRecommend)
  router.get('/', controller.app.index)
  router.get('/shop42284557(/.+)?', controller.app.shop42284557)
}
