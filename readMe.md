# Video Tracker API
#### By Ian Knepper

Video Tracker API is an in-house video analytics system built as a microservice with a relational database backend. Hook up your SQL Database and keep track of how many times your videos are watched.

Features include:
- Create Video: Adds new video to DB
- Track Video View: Adds view to DB
- Get Video Report: Returns info on a video including view count

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
- JavaScript ES6
- Object schema validation via [Joy](https://github.com/hapijs/joi)
- Queries via [Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html)
- Routes Tested using Postman
- postgreSQL Db

## Authors

- **Ian Knepper** - _Initial work_ - (https://github.com/rollaflip)
