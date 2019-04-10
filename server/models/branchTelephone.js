module.exports = (Sequelize, DataTypes) => {
  const BranchTel = Sequelize.define('BranchTel', {
    owner: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {})
  BranchTel.associate = models => {
    BranchTel.belongsTo(models.Branch)
  }
  return BranchTel
}