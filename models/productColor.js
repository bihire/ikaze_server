module.exports = (Sequelize, DataTypes) => {
  const ProductColor = Sequelize.define(
    'ProductColor',
    {
      color: DataTypes.STRING,
    },
    {},
  );
  ProductColor.associate = models => {
    // 1:m
    ProductColor.belongsTo(models.Product, {
      onDelete: 'CASCADE',
      foreignKey: 'product_id',
      allowNull: false,
    });
  };
  return ProductColor;
};
