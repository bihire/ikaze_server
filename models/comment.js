module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define(
    'Comment',
    {
      comment: DataTypes.STRING,
    },
    {},
  );
  Comment.associate = models => {
    Comment.belongsTo(models.Product, {
      onDelete: 'CASCADE',
      foreignKey: 'product_id',
      allowNull: false,
    });
    Comment.belongsTo(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: 'member_id',
      allowNull: false,
    });
  };
  return Comment;
};
