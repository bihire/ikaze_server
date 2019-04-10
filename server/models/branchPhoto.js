module.exports = (Sequelize, DataTypes) => {
  const Photo = Sequelize.define('Photo', {
    coverPhoto: DataTypes.STRING,
    locationPhoto: DataTypes.STRING,
    shopPhoto: DataTypes.STRING
  }, {})
  Photo.associate = models => {
    Photo.belongsTo(models.Branch)
  }
  return Photo
}