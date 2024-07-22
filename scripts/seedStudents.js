'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', [
      { first_name: 'Yulia', last_name: 'Prihodko', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Ivan', last_name: 'Zbaraski', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Faiza', last_name: 'Hamid', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Roman', last_name: 'Makkarski', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};