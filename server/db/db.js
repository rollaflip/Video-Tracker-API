const Sequelize = require('sequelize');

//Change to your database name
const dbName = 'VideoTracker';

// Change to your dialect
// Options include: 'mysql'||'sqlite'||'postgres'||'mssql',
const dialect = 'postgres';
// if using SQLite, add the following after 'pool' as a new Sequelize parameter
// storage: 'path/to/database.sqlite'

//Change host to your database location
const host = 'localhost:5432';

const connection = `${dialect}://${host}/${dbName}`;
// if you require a user and password change connection to the following format
// const connection = `${dialect}://user:pass@example.com:5432/${dbName}`

const sequelize = new Sequelize(process.env.DATABASE_URL || connection, {
  logging: false,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
module.exports = sequelize;
