# Video Tracker API
#### By Ian Knepper

## Installation

- Install dependencies via npm
```
$npm install
```
- And one of the following, depending on your database:
```
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL
```
## Create your DB
Create your db using create.sql

## Navigate to /server/db/db.js
Change the connection string to fit your needs
* More directions in comments in db.js
- dbName
- dialect
- host

## Run with
```
$ nodemon app.js
```

### See API.md for futher instructions
### Enjoy!

## Built With:
- Sequelize for SQL queries
- JavaScript ES6
- Object schema validation via [Joy](https://github.com/hapijs/joi)
- Queries via [Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html)
- Routes Tested using Postman
- SQL Db

## Authors

- **Ian Knepper** - _Initial work_ - (https://github.com/rollaflip)
