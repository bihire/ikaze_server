module.exports = (Sequelize, DataTypes) => {
  const ProductQuantity = Sequelize.define('ProductQuantity', {
    quantity: DataTypes.INTEGER
  }, {})
  ProductQuantity.associate = models => {
    // 1:m
    ProductQuantity.belongsTo(models.ProductSize, {
      onDelete: "CASCADE",
      foreignKey: 'productSize_id',
      allowNull: false
    })
  }
  return ProductQuantity
}