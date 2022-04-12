const errorMessage = require('./errorMessages');

const selectADoctorValid = (doctor) => {
  if (doctor === null) return errorMessage.doctorNotFound;

  return true;
};

module.exports = selectADoctorValid;
