module.exports = (Sequelize, DataTypes) => {
  const MainShop = Sequelize.define('MainShop', {
    name: DataTypes.STRING,
    mainShopEmail: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT
  }, {})
  MainShop.associate = models => {
    MainShop.belongsTo(models.Member,{
      onDelete: "CASCADE",
      foreignKey: {
        as: "member_id",
        allowNull: false
      }
    })
  }
  return MainShop
}