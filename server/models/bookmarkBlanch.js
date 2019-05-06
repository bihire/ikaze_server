module.exports = (sequelize, DataTypes) => {
  const BookmarkBranch = sequelize.define('BookmarkBranch', {})

  BookmarkBranch.associate = models => {
    BookmarkBranch.belongsTo(models.User)
    BookmarkBranch.belongsTo(models.Branch)
  }

  return BookmarkBranch
}