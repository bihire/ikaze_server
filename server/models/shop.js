module.exports = (Sequelize, DataTypes) => {
  const Shop = Sequelize.define('Shop', {
    name: DataTypes.STRING,
    shopEmail: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT,
    genre: DataTypes.STRING
  }, {})
  Shop.associate = models => {
    Shop.belongsTo(models.User)
  }
  return Shop
}