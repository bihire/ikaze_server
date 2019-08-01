module.exports = (Sequelize, DataTypes) => {
  const UserInfo = Sequelize.define(
    'UserInfo',
    {
      mobo_phone: DataTypes.STRING,
      passport: DataTypes.STRING,
      national_id: DataTypes.STRING,
      balance: DataTypes.NUMERIC,
      transaction: DataTypes.NUMERIC,
    },
    {},
  );
  UserInfo.associate = models => {
    UserInfo.belongsTo(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: 'owner',
      allowNull: false,
    });
  };
  return UserInfo;
};
