const server = require('./server')
const config = require('./config')

const main = async () => {
  await server.listen(config.server.port)
  console.log(`Server running in port ${config.server.port}`)
}

main()
