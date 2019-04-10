module.exports = (Sequelize, DataTypes) => {
  const Rating = Sequelize.define('Rating', {
    rate: DataTypes.INTEGER
  }, {})
  Rating.associate = models => {
    Rating.belongsTo(models.Product)
    Rating.belongsTo(models.User)
  }
  return Rating
}