const {Video} = require('./video')
const {Views} = require('./video')

Views.belongsTo(Video)
Video.hasMany(Views)

module.exports = {
  Video,
  Views
}
