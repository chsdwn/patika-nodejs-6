const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  const url = ctx.URL.pathname || ''

  switch (url.toLowerCase()) {
    case '/':
      ctx.body = '<h2>Welcome to Index</h2>'
      break
    case '/about':
      ctx.body = '<h2>Welcome to About</h2>'
      break
    case '/contact':
      ctx.body = '<h2>Welcome to Contact</h2>'
      break
    default:
      ctx.body = '<h2>Not Found</h2>'
  }
})

const port = 3000
app.listen(3000, () => console.log(`Listening on port ${port}`))
