'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CRM: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telephone: {
        type: Sequelize.INTEGER,
      },
      cellphone: {
        type: Sequelize.INTEGER,
      },
      CEP: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdated: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'specialties',
          key: 'id'
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  }
};