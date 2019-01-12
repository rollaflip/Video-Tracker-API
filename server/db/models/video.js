const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define('video', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    // allowNull: false,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  brand: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  published: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const View = db.define('video', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  viewDate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  videoID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

View.belongsTo(Video);
Video.hasMany(View);

module.exports = { Video, View };
