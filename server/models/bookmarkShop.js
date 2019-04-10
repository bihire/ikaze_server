module.exports = (sequelize, DataTypes) => {
  const BookmarkShop = sequelize.define('BookmarkShop',   {})

  BookmarkShop.associate = models => {
    BookmarkShop.belongsTo(models.User)
    BookmarkShop.belongsTo(models.Shop)
  }

  return BookmarkShop
}