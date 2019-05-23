module.exports = (Sequelize, DataTypes) => {
  const ProductSize = Sequelize.define('ProductSize', {
    size: DataTypes.STRING
  }, {})
  ProductSize.associate = models => {
    // 1:m
    ProductSize.belongsTo(models.ProductColor, {
      onDelete: "CASCADE",
      foreignKey: 'productColor_id',
      allowNull: false
    })
  }
  return ProductSize
}