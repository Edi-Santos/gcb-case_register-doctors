const { doctor } = require('../../models');
const doctorDatasValid = require('../validations/spcifiedsValidations/doctorDatasValid');
const updateDoctorValid = require('../validations/spcifiedsValidations/updateDoctorValid');

const insertDoctor = async (doctorDatas) => {
  const { name, CRM, telephone, cellphone, CEP } = doctorDatas;

  try {
    const validating = doctorDatasValid(doctorDatas);

    if (validating !== true) return validating;

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
    const validating = doctorDatasValid(doctorDatas);

    if (validating !== true) return validating;

    const [updateDoc] = await doctor.update(
      { name, CRM, telephone, cellphone, CEP },
      { where: { id } },
    );

    const updateDocValid = updateDoctorValid(updateDoc);

    if (updateDocValid.message) return updateDocValid;

    return true;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const selectADoctor = async (id) => {
  try {
    const getDoctor = await doctor.findOne({ where: { id } });

    if (getDoctor === null) return { status: 404, message: 'id not found' };

    return getDoctor;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const getAllDoctors = async () => {
  try {
    const doctors = await doctor.findAll();

    return doctors;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
  updateDoctor,
  selectADoctor,
  getAllDoctors,
};
