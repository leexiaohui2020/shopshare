module.exports = app => {
  const { router, controller } = app

  router.get('/', controller.app.index)
  router.get('/shop42284557(/.+)?', controller.app.shop42284557)
}
