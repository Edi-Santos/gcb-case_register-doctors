const { doctor } = require('../../models');

const insertDoctor = async (doctorDatas) => {
  try {
    const newDoctor = await doctor.create(doctorDatas);

    return newDoctor;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
};
