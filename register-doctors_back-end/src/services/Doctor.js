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
    const { error } = validation.validate(doctorDatas);

    if (error) {
      const { message } = error.details;
      return { status: 400, message };
    }

    const [updateDoc] = await doctor.update(
      { name, CRM, telephone, cellphone, CEP },
      { where: { id } },
    );

    if (!updateDoc) return { status: 401, message: 'not updated' };

    return true;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const selectADoctor = async (id) => {
  try {
    const getDoctor = await doctor.findOne({ where: { id } });

    return getDoctor;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
  updateDoctor,
  selectADoctor,
};
