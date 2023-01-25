'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Eventos', 'locale', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });
  },
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.removeColumn('Eventos', 'locale', { transaction: t })
        ]);
      });
    }
};
