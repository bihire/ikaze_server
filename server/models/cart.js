module.exports = (Sequelize, DataTypes) => {
  const Cart = Sequelize.define('Cart', {
    cart: DataTypes.STRING
  }, {})
  Cart.associate = models => {
    Cart.belongsTo(models.Product)
    Cart.belongsTo(models.User)
  }
  return Cart
}