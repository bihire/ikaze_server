module.exports = (Sequelize, DataTypes) => {
  const MainShopTel = Sequelize.define(
    'MainShopTel',
    {
      owner: DataTypes.STRING,
      tel: DataTypes.STRING,
    },
    {},
  );
  MainShopTel.associate = models => {
    MainShopTel.belongsTo(models.MainShop, {
      onDelete: 'CASCADE',
      foreignKey: 'mainShop_id',
      allowNull: false,
    });
  };
  return MainShopTel;
};
