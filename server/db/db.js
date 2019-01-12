// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'||'sqlite'||'postgres'||'mssql',

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

//   // SQLite only
//   storage: 'path/to/database.sqlite',

//   // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//   operatorsAliases: false
// });

// let db = 'postgres://localhost:5432/VideoTracker'
// const sequelize = new Sequelize({
//   database: 'VideoTracker',
//   username: 'Yen',
//   password: null,
//   dialect: 'postgres'
// });
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
const databaseName = 'VideoTracker'
const sequelize = new Sequelize(
 process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
 {
  logging: false
 }
)

module.exports = sequelize
