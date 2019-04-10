module.exports = (Sequelize, DataTypes) => {
  const Branch = Sequelize.define('Branch', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    brand: DataTypes.STRING,
  }, {})
  Branch.associate = models => {
    Branch.belongsTo(models.Shop)
  }
  return Branch
}