module.exports = (Sequelize, DataTypes) => {
  const MemberShip = Sequelize.define('MemberShip', {
    
    member_ship: DataTypes.STRING
  }, {});
  // MemberShip.associate = models => {
  //   MemberShip.hasMany(models.Member, {
  //     onDelete: "CASCADE",
  //     foreignKey: "member_id",
  //       allowNull: false
      
  //   })
  // }
  return MemberShip;
};