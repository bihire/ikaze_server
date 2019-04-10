module.exports = (Sequelize, DataTypes) => {
  const Product = Sequelize.define('Product', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    newPrice: DataTypes.NUMERIC,
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    productCondition: DataTypes.STRING,
  }, {})
  Product.associate = models => {
    // 1:m
    Product.belongsTo(models.Branch)
    Product.belongsTo(models.Shop)
    Product.belongsTo(models.User)
  }
  return Product
}