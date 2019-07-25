module.exports = (Sequelize, DataTypes) => {
  const Cart = Sequelize.define('Cart', {
    color: DataTypes.STRING,
    quantity: DataTypes.STRING,
    size: DataTypes.STRING,
  }, {})
  Cart.associate = models => {
    Cart.belongsTo(models.Member, {
      onDelete: "CASCADE",
      foreignKey: 'member_id',
      allowNull: false
    })
  }
  return Cart
}