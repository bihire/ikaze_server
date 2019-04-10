module.exports = (Sequelize, DataTypes) =>{
  const User = Sequelize.define('User', {
    userName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    balance: DataTypes.NUMERIC,
  },{})
  User.associate = models => {
    User.hasMany(models.Shop)
  }
  return User
}