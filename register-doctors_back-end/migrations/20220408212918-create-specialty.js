'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialty: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('specialties');
  }
};