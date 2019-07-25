module.exports = (Sequelize, DataTypes) => {
  const Order = Sequelize.define(
    'Order',
    {
      bal: DataTypes.NUMERIC,
    },
    {},
  );
  Order.associate = models => {
    Order.belongsTo(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: 'member_id',
      allowNull: false,
    });
  };
  return Order;
};
