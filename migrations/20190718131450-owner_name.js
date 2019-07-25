

module.exports = {
  up: (queryInterface, Sequelize) => 
    Promise.all([
      queryInterface.renameColumn('Members', 'id', 'owner'),
    ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.renameColumn('Member', 'owner', 'id'),
  ]),
};
