module.exports =  (router) => {

  router.get('/', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
      title: '聊天'
    }
    await ctx.render('index', ctx.state)
  })

}
