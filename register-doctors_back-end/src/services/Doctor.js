const { Op } = require('sequelize');
const { doctor } = require('../../models');

// Importando validações
const doctorDatasValid = require('../validations/spcifiedsValidations/doctorDatasValid');
const selectADoctorValid = require('../validations/spcifiedsValidations/selectADoctorValid');
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

    if (updateDocValid !== true) return updateDocValid;

    return true;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const selectADoctor = async (key, value) => {
  try {
    const getDoctor = await doctor.findOne({
      where: { [key]: value },
    });

    const validating = selectADoctorValid(getDoctor);

    if (validating !== true) return validating;

    return getDoctor;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

const selectADoctorByName = async (name) => {
  const search = `%${name}%`;
  try {
    const getDoctor = await doctor.findAll({ where: {
      name: {
        [Op.like]: search,
      },
     } });

    const validating = selectADoctorValid(getDoctor);

    if (validating !== true) return validating;

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

const softDeleteDoctor = async (id, active) => {
  try {
    const [deleteDoctor] = await doctor.update(
      { active },
      { where: { id } },
    );

    const validating = updateDoctorValid(deleteDoctor);

    if (validating !== true) return validating;

    return true;
  } catch (error) {
    console.log(`Erro no Service || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
  updateDoctor,
  selectADoctor,
  selectADoctorByName,
  getAllDoctors,
  softDeleteDoctor,
};
