
const Sequelize = require('sequelize')
const db = require('../sequelize')

const Video = db.define('video', {
  id: {
    type: Sequelize.STRING,
    allowNull: false
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

const ViewCount = db.define('video', {
  id: {
    type: Sequelize.STRING,
    allowNull: false
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


module.exports = (Video, ViewCount)
