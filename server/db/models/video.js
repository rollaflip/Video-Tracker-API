const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define(
  'Video',
  {
    id: { primaryKey: true, type: Sequelize.INTEGER },
    name: { type: Sequelize.TEXT, allowNull: false },
    brand: { type: Sequelize.TEXT, allowNull: false },
    published: { type: Sequelize.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const View = db.define(
  'View',
  {
    id: { primaryKey: true, type: Sequelize.INTEGER },
    viewDate: { type: Sequelize.INTEGER, allowNull: false },
    videoID: { type: Sequelize.INTEGER, allowNull: false },
  },

  {
    timestamps: false,
  }
);

View.belongsTo(Video);
Video.hasMany(View);

module.exports = { Video, View };
