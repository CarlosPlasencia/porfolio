const photosRoute = require('./photos')

const routes = (server) => {
  server.use(photosRoute)
}

module.exports = routes
