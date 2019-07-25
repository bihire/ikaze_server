module.exports = (Sequelize, DataTypes) => {
  const Shop = Sequelize.define('Shop', {
    name: DataTypes.STRING,
    shopEmail: {
      type: DataTypes.STRING,
      unique: true
    },
    brand: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {})
  Shop.associate = models => {
    Shop.belongsTo(models.MainShop, {
      onDelete: "CASCADE",
      foreignKey: 'mainShop_id',
      allowNull: false
    })
    Shop.belongsTo(models.Member, {
      onDelete: "CASCADE",
      foreignKey: 'owner',
      allowNull: false
    })
  }
  return Shop
}