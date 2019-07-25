module.exports = (sequelize, DataTypes) => {
  const BookmarkShop = sequelize.define('BookmarkShop',   {})

  BookmarkShop.associate = models => {
    BookmarkShop.belongsTo(models.Member, {
      onDelete: "CASCADE",
      foreignKey: 'member_id',
      allowNull: false
    })
    BookmarkShop.belongsTo(models.Shop, {
      onDelete: "CASCADE",
      foreignKey: 'shop_id',
      allowNull: false
    })
  }

  return BookmarkShop
}