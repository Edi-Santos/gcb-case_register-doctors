const errorMessage = require('./errorMessages');

const selectADoctorValid = (doctor) => {
  if (doctor === null) return errorMessage.idNotFound;

  return true;
};

module.exports = selectADoctorValid;
