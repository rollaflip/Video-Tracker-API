const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define(
  'Video',
  {
    id: { primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true },
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
    id: { primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true },
    date: { type: Sequelize.INTEGER, allowNull: false },
    videoID: { type: Sequelize.INTEGER, allowNull: false },
  },

  {
    timestamps: false,
  }
);

Video.hasMany(View, {foreignKey: 'videoID'});
View.belongsTo(Video,{foreignKey: 'id'});

module.exports = { Video, View };
