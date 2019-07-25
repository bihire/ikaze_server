module.exports = (sequelize, DataTypes) => {
  const BookmarkMainShop = sequelize.define('BookmarkMainShop', {});

  BookmarkMainShop.associate = (models) => {
    BookmarkMainShop.belongsTo(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: 'member_id',
      allowNull: false,
    });
    BookmarkMainShop.belongsTo(models.MainShop, {
      onDelete: 'CASCADE',
      foreignKey: 'mainShop_id',
      allowNull: false,
    });
  };

  return BookmarkMainShop;
};
