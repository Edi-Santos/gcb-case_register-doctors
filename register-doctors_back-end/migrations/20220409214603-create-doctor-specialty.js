'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdated: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'doctors',
          key: 'id',
        },
        primaryKey: true,
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdated: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'specialties',
          key: 'id',
        },
        primaryKey: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctor_specialties');
  }
};