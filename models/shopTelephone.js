module.exports = (sequelize, DataTypes) => {
  const ShopTel = sequelize.define('ShopTel', {
    owner: DataTypes.STRING,
    tel: DataTypes.STRING
  })

  ShopTel.associate = function (models) {
    ShopTel.belongsTo(models.Shop, {
      onDelete: "CASCADE",
      foreignKey: 'shop_id',
      allowNull: false
    })
  }

  return ShopTel
}