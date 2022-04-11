const validation = require('../insertDoctorSchema');

const insertDoctorValid = (doctorDatas) => {
  const { error } = validation.validate(doctorDatas);

  if (error) {
    const { message } = error.details[0];
    return { status: 400, message };
  }

  return true;
};

module.exports = insertDoctorValid;
