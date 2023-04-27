const User = require('./User');
const Discussion = require('./Discussion');
const Comment = require("./Comment")


User.hasMany(Discussion, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Discussion.belongsTo(User, {
  foreignKey: 'user_id'
});

Discussion.hasMany(Comment, {
  foreignKey: 'discussion_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: 'discussion_id'
});

module.exports = { User, Discussion , Comment };
