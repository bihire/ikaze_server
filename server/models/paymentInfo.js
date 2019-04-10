module.exports = (Sequelize, DataTypes) => {
  const PaymentInfo = Sequelize.define('PaymentInfo', {
    creditCardNum: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {})
  PaymentInfo.associate = models => {
    PaymentInfo.belongsTo(models.User)
  }
  return PaymentInfo
}