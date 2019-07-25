module.exports = (Sequelize, DataTypes) => {
  const Product = Sequelize.define('Product', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    newPrice: DataTypes.NUMERIC,
    description: DataTypes.STRING,
    productCondition: DataTypes.STRING,
  }, {})
  Product.associate = models => {
    // 1:m
    Product.belongsTo(models.MainShop, {
      onDelete: "CASCADE",
      foreignKey: 'mainShop_id',
      allowNull: false
    })
    Product.belongsTo(models.Shop, {
      onDelete: "CASCADE",
      foreignKey: 'shop_id',
      allowNull: false
    })
    Product.belongsTo(models.Member, {
      onDelete: "CASCADE",
      foreignKey: 'owner',
      allowNull: false
    })
    Product.hasMany(models.Cart, {
      onDelete: "CASCADE",
      foreignKey: 'product_id', allowNull: false
    })
  }
  return Product
}