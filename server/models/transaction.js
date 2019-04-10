module.exports = (Sequelize, DataTypes) => {
  const Transaction = Sequelize.define('Transaction', {
    bal: DataTypes.NUMERIC
  }, {})
  Transaction.associate = models => {
    Transaction.belongsTo(models.Product)
    Transaction.belongsTo(models.User)
  }
  return Transaction
}