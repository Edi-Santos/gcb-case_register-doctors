'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('specialties',
    [
      { specialty: 'Alergologia'},
      { specialty: 'Angiologia'},
      { specialty: 'Buco maxilo'},
      { specialty: 'Cardiologia clínca'},
      { specialty: 'Cardiologia infantil'},
      { specialty: 'Cirurgia cabeça e pescoço'},
      { specialty: 'Cirurgia cardíaca'},
      { specialty: 'Cirurgia de tórax'},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('specialties', null, {});
  },
};
