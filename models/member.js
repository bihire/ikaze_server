module.exports = (Sequelize, DataTypes) =>{
  const Member = Sequelize.define('Member', {
    user_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    profile_pic: DataTypes.STRING,
    
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{});
  Member.associate = models => {
    Member.belongsTo(models.MemberShip, {
      onDelete: "CASCADE",
      foreignKey: 'memberShip_id',
      allowNull: false
    });
  };
  return Member;
};