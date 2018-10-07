const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(()=>{
    const server = express()
    const routes = require('./routes/index')

    server.use('/api', routes)

    server.get('/about', (req, res) => {
      const data = ['snotgreenblue', 'pidgeon gray' ]
      return app.render(req, res, '/about', {data})
    })

    server.get('/fruit/:slug', (req, res) => {
      let actualPage = '/fruit'
      let queryParams = {title: req.params.slug}
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if(err) throw err;
      console.log(`> on ${port}`)
    })
  })
  .catch(exception => {
    console.error(exception.stack)
    process.exit(1)
  })