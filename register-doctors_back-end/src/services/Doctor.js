const { doctor } = require('../../models');
const validation = require('../validations/insertDoctorSchema');

const insertDoctor = async (doctorDatas) => {
  const { name, CRM, telephone, cellphone, CEP } = doctorDatas;

  try {
    const { error } = validation.validate(doctorDatas);

    if (error) {
      const { message } = error.details[0];
      return { status: 400, message };
    }

    const newDoctor = await doctor.create(
      { name, CRM, telephone, cellphone, CEP },
    );

    return newDoctor;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const updateDoctor = async (id, doctorDatas) => {
  const { name, CRM, telephone, cellphone, CEP } = doctorDatas;

  try {
    await doctor.update(
      { name, CRM, telephone, cellphone, CEP },
      { where: { id } },
    );
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
  updateDoctor,
};
