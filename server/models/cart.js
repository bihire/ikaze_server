module.exports = (Sequelize, DataTypes) => {
  const Cart = Sequelize.define('Cart', {
    color: DataTypes.STRING,
    quantity: DataTypes.STRING,
    size: DataTypes.STRING,
  }, {})
  Cart.associate = models => {
    Cart.belongsTo(models.Product)
    Cart.belongsTo(models.User)
  }
  return Cart
}