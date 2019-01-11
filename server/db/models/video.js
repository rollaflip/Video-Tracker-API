
const Sequelize = require('sequelize')
const db = require('../db')

const Video = db.define('video', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  published: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

const View = db.define('video', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  viewDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  videoID: {
    type: Sequelize.STRING,
    allowNull: false
  },
})


View.belongsTo(Video)
Video.hasMany(View)

module.exports = {Video, View}

