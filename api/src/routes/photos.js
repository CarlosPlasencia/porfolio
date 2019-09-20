const { Router } = require('express')

const routes = Router()

routes.route('/')
  .get((req, res) => {
    res.send('Hola Api')
  })

module.exports = routes
