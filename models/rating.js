module.exports = (Sequelize, DataTypes) => {
  const Rating = Sequelize.define('Rating', {
    rate: DataTypes.INTEGER
  }, {})
  Rating.associate = models => {
    Rating.belongsTo(models.Product, {
      onDelete: "CASCADE",
      foreignKey: 'product_id',
      allowNull: false
    })
    Rating.belongsTo(models.Member, {
      onDelete: "CASCADE",
      foreignKey: 'member_id',
      allowNull: false
    })
  }
  return Rating
}