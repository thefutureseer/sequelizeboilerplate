module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Religion', [
      {
        religion_name: 'Christianity',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        religion_name: 'Islam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Religion', null, {});
  }
};