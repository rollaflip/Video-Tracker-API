const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define(
  'Video',
  {
    id: { primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true },
    name: { type: Sequelize.TEXT, allowNull: false, notEmpty: true },
    brand: { type: Sequelize.TEXT, allowNull: false, notEmpty: true },
    published: { type: Sequelize.DATE, allowNull: false, notEmpty: true },
  },
  {
    timestamps: false,
  }
);

const View = db.define(
  'View',
  {
    id: { primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true },
    videoID: { type: Sequelize.INTEGER, allowNull: false, notEmpty: true },
  },
  {
    timestamps: true,
  }
);

Video.hasMany(View, { foreignKey: 'videoID' });
View.belongsTo(Video, { foreignKey: 'id' });

module.exports = { Video, View };
