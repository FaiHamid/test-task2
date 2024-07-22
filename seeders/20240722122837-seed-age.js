'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const getRandomAge = () =>  Math.floor(Math.random()*(50 - 16 + 1)) + 16;

    const students = await queryInterface.sequelize.query(
      'SELECT id FROM \"Students\"',
      {type: Sequelize.QueryTypes.SELECT}
    );

    const updates = students.map(student => queryInterface.bulkUpdate(
      '\"Students\"', 
      {age: getRandomAge()},
      {id: student.id}
    ));

    await Promise.all(updates);
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn('\"Students\"', 'age');
  }
};
