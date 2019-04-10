module.exports = (Sequelize, DataTypes) => {
  const BranchLoc = Sequelize.define('BranchLoc', {
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  },{})
  BranchLoc.associate = models => {
    BranchLoc.belongsTo(models.Branch)
  }
  return BranchLoc
}