const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:3000/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db



//http://ianvid.com/api/videos       possible end point for us
