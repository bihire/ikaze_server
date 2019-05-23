module.exports = (Sequelize, DataTypes) =>{
  const Member = Sequelize.define('Member', {
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
    balance: DataTypes.NUMERIC
  },{})
  Member.associate = models => {
    Member.belongsTo(models.MemberShip, {
      onDelete: "CASCADE",
      foreignKey: 'memberShip_id',
      allowNull: false
    })
  }
  return Member
}