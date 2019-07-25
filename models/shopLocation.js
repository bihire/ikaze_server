module.exports = (Sequelize, DataTypes) => {
  const ShopLoc = Sequelize.define(
    'ShopLoc',
    {
      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING,
    },
    {},
  );
  ShopLoc.associate = models => {
    ShopLoc.belongsTo(models.Shop, {
      onDelete: 'CASCADE',
      foreignKey: 'shop_id',
      allowNull: false,
    });
  };
  return ShopLoc;
};
