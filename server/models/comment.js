module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define('Comment', {
    comment: DataTypes.STRING
  }, {})
  Comment.associate = models => {
    Comment.belongsTo(models.Product)
    Comment.belongsTo(models.User)
  }
  return Comment
}