const dotenv = require('dotenv')
const path = require('path')

const configs = {
  development: { config: 'dev' },
  production: { config: 'prod' },
  test: {
    config: 'test',
    env: path.resolve(__dirname, '..', '..', 'test', '.env')
  }
}
const currentEnvironment = process.env.NODE_ENV || 'development'
const defaultPath = path.resolve(__dirname, '..', '..', '.env')
const envPath = configs[currentEnvironment].env || defaultPath

dotenv.config({ path: envPath })

const _default = {
  server: {
    port: process.env.API_PORT,
    env: process.env.NODE_ENV
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  database: {
    uri: process.env.DATABASE_URI
  },
  logger: {
    level: process.env.LOGGER_LEVEL || 'warn',
    host: process.env.LOGGER_HOST,
    port: process.env.LOGGER_PORT
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}

const config = require(`./${configs[currentEnvironment].config}`)

module.exports = Object.assign({ env: currentEnvironment }, _default, config)
